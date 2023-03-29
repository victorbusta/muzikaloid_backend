import { AuthService } from '../auth/auth.service';
import { LoginUserDto } from '../resources/users/dto/login-user.dto';
import { CreateUserDto } from '../resources/users/dto/create-user.dto';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly authService;
    constructor(appService: AppService, authService: AuthService);
    register(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        firstname: string;
        lastname: string;
        username: string;
        email: string;
    }, never>;
    login(req: any, loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
    hello(): Promise<string>;
}
