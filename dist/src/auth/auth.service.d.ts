import { UsersService } from '../resources/users/users.service';
import { CreateUserDto } from 'src/resources/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<User | false>;
    login(user: User): {
        access_token: string;
    };
    register(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        firstname: string;
        lastname: string;
        username: string;
        email: string;
    }, never>;
}
