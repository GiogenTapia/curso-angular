import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    
    return this.authService.create(createUserDto);
  }

  @Post('/login')
  login( @Body() loginDto : LoginDto ){
    return this.authService.login(loginDto);

  }

  @Post('/register')
  register( @Body() registerDto : RegisterDto ){
    return this.authService.register(registerDto);

  }


  @UseGuards(AuthGuard)
  @Get()
  findAll( @Request() req : Request ) {
    
    const user = req['user'];
    
    //return this.authService.findAll();
    return user;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
