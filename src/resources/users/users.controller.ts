import { UserOwnerGuard } from './../../auth/guards/owner-user.guard';
import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/utils/public.decorator';
import { VerifyEmailGuard } from 'src/auth/guards/verify-email.guard';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get('')
  @ApiResponse({ status: 200, description: 'Returns all users.' })
  findAll() {
    return this.usersService.findAll();
  }

  @Public()
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Returns one user.' })
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Public()
  @UseGuards(VerifyEmailGuard)
  @Get(':id/verify/:token')
  @ApiResponse({
    status: 200,
    description: 'Verify the registration of a users.',
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verifyEmail(@Param('id') id: number, @Param('token') token: string) {
    return this.usersService.verifyEmail(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(UserOwnerGuard)
  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Update a user.' })
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(UserOwnerGuard)
  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Remove a user.' })
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }

  @Public()
  @Get(':id/comments')
  @ApiResponse({ status: 200, description: 'Returns a user comments.' })
  findComments(@Param('id') id: number) {
    return this.usersService.findComments(+id);
  }

  @Public()
  @Get(':id/articles')
  @ApiResponse({ status: 200, description: 'Returns a user articles.' })
  findArticles(@Param('id') id: number) {
    return this.usersService.findArticles(+id);
  }

  @Public()
  @Get(':id/articles/:typeId')
  @ApiResponse({
    status: 200,
    description: 'Returns a user articles according to a article type.',
  })
  findArticlesByType(@Param('id') id: number, @Param('typeId') typeId: number) {
    return this.usersService.findArticlesByType(+id, +typeId);
  }

  // @Public()
  // @Get(':id/hardwares')
  // findHardwares(@Param('id') id: number) {
  //   return this.usersService.findHardwares(+id);
  // }

  // @Public()
  // @Get(':id/hardwares/:typeId')
  // findHardwaresByType(
  //   @Param('id') id: number,
  //   @Param('typeId') typeId: number,
  // ) {
  //   return this.usersService.findHardwaresByType(+id, +typeId);
  // }
}
