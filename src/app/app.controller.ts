import { UniqueUserGuard } from '../auth/guards/unique-user.guard';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { LoginUserDto } from '../resources/users/dto/login-user.dto';
import { RegisterUserDto } from '../resources/users/dto/register-user.dto';
import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from '../auth/utils/public.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Public()
  @UseGuards(UniqueUserGuard)
  @Post('auth/register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() loginUserDto: LoginUserDto) {
    return this.authService.login(req.user);
  }

  @Public()
  @Get('/')
  async hello() {
    return 'please refer to "/api" for documentation';
  }
}
