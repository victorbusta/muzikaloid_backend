import { UniqueUserGuard } from '../auth/guards/unique-user.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { AuthService } from '../auth/auth.service';
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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(@Request() req, @Body() loginUserDto: LoginUserDto) {
    return this.authService.login(req.user);
  }

  @ApiBearerAuth('JWT-auth')
  @Post('auth/logout')
  logout(@Request() req) {
    return this.authService.logout(req.user.sub);
  }

  @Public()
  @Get('/')
  async hello() {
    return 'please refer to "/api" for documentation';
  }
}
