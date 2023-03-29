import { Controller, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/utils/public.decorator';

@ApiTags('User Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Public()
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rolesService.findOne(+id);
  }

  @Public()
  @Get(':id/users')
  findUsers(@Param('id') id: number) {
    return this.rolesService.findUsers(+id);
  }
}
