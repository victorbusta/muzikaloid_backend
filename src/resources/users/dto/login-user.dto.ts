import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, isNotEmpty } from 'class-validator';

export class LoginUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  password: string;
}
