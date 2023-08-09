import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';

import * as bcryptjs from 'bcryptjs';

import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) 
    private userModel: Model <User>,
    private jwtService: JwtService,
  ) { }

  async create(createUserDto: CreateUserDto) : Promise<User> {
    console.log(createUserDto);


   try {

    const {password, ...userData} = createUserDto;

    const newUser =new this.userModel({
      password: bcryptjs.hashSync(password, 10),
      ...userData
    });

     await newUser.save();
     const {password:_, ...user} = newUser.toJSON();

     return user

   } catch (error) {
    if (error.code === 11000) {
      throw new BadRequestException(`${createUserDto.email} already exists!`)
    }
    throw new InternalServerErrorException('Somenting terrible happen!!!')

   }
  }


  async register( registerDto: RegisterDto): Promise<LoginResponse>{
  
    const user =  await this.create(registerDto);

    return {
      user: user,
      token: this.getJwToken({id: user._id}),

    }
  }

  /**
   * User{_id,email,roles}
   * Token -> dfgsg.fsdfds.fds
   */

  async login(loginDto: LoginDto): Promise<LoginResponse>{

    const {email, password} = loginDto;
    const user = await this.userModel.findOne({email});
    if (!user) {
      throw new UnauthorizedException('Not valid credentials');
    }

    if (!bcryptjs.compareSync(password, user.password)) {
      throw new UnauthorizedException('Not valid credentials');
    }

    const {password: _, ...rest} = user.toJSON();

    return {
      user: rest,
      token: this.getJwToken({id: user.id}),
    }

  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  getJwToken( payload: JwtPayload){

    const token = this.jwtService.sign(payload);
    return token;

  }
}
