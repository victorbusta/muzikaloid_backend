import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty()
  @Length(6, 50)
  firstname: string;

  @ApiProperty()
  @Length(6, 100)
  lastname: string;

  @ApiProperty()
  @Length(6, 50)
  username: string;

  @ApiProperty()
  @IsEmail()
  @Length(6, 50)
  email: string;

  @ApiProperty()
  @Length(8, 100)
  password: string;

  token: string;
  validated: boolean;
  role_id: number;
}
