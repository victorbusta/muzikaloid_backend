import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  adresse: string;

  @ApiProperty()
  password: string;

  roleId: any;
}
