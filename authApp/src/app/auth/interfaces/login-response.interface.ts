import { User } from "./User.interface";

export interface LoginResponse{
  user: User,
  token: string
}
