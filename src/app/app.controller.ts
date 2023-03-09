import { UniqueUserGuard } from '../auth/guards/unique-user.guard';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { LoginUserDto } from '../resources/users/dto/login-user.dto';
import { CreateUserDto } from '../resources/users/dto/create-user.dto';
import {
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from '../auth/utils/public.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Public()
  @UseGuards(UniqueUserGuard)
  @Post('auth/register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() loginUserDto: LoginUserDto) {
    // return req.user.id;
    return this.authService.login(req.user);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
