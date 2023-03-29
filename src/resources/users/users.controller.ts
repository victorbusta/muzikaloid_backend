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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/utils/public.decorator';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get('')
  findAll() {
    return this.usersService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(UserOwnerGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(UserOwnerGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }

  @Public()
  @Get(':id/articles')
  findArticles(@Param('id') id: number) {
    return this.usersService.findArticles(+id);
  }

  @Public()
  @Get(':id/articletypes/:typeId')
  findArticlesByType(@Param('id') id: number, @Param('typeId') typeId: number) {
    return this.usersService.findArticlesByType(+id, +typeId);
  }
  @Public()
  @Get(':id/hardwares')
  findHardwares(@Param('id') id: number) {
    return this.usersService.findHardwares(+id);
  }

  @Public()
  @Get(':id/hardwaretypes/:typeId')
  findHardwaresByType(
    @Param('id') id: number,
    @Param('typeId') typeId: number,
  ) {
    return this.usersService.findHardwaresByType(+id, +typeId);
  }

  @Public()
  @Get(':id/articlecomments')
  findArticleComments(@Param('id') id: number) {
    return this.usersService.findArticleComments(+id);
  }

  @Public()
  @Get(':id/articledocuments')
  findArticleDocuments(@Param('id') id: number) {
    return this.usersService.findArticleDocuments(+id);
  }

  @Public()
  @Get(':id/articlecomments')
  findHardwareComments(@Param('id') id: number) {
    return this.usersService.findHardwareComments(+id);
  }

  @Public()
  @Get(':id/articledocuments')
  findHardwareDocuments(@Param('id') id: number) {
    return this.usersService.findHardwareDocuments(+id);
  }
}
