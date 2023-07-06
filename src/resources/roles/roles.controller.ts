import { Controller, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/utils/public.decorator';

@ApiTags('User Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Public()
  @Get()
  @ApiResponse({ status: 200, description: 'Returns roles.' })
  findAll() {
    return this.rolesService.findAll();
  }

  @Public()
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Returns a role.' })
  findOne(@Param('id') id: number) {
    return this.rolesService.findOne(+id);
  }

  @Public()
  @Get(':id/users')
  @ApiResponse({ status: 200, description: 'Returns all user from role.' })
  findUsers(@Param('id') id: number) {
    return this.rolesService.findUsers(+id);
  }
}
