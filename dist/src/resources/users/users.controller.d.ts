import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        firstname: string;
        lastname: string;
        username: string;
        email: string;
        createdAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        username: string;
        email: string;
        createdAt: Date;
        articles: import(".prisma/client").Article[];
        hardwares: import(".prisma/client").Hardware[];
    }, never>;
    update(id: number, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    findArticles(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        articles: import(".prisma/client").Article[];
    }[]>;
    findArticlesByType(id: number, typeId: number): import(".prisma/client").Prisma.PrismaPromise<{
        articles: import(".prisma/client").Article[];
    }[]>;
    findHardwares(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        hardwares: import(".prisma/client").Hardware[];
    }[]>;
    findHardwaresByType(id: number, typeId: number): import(".prisma/client").Prisma.PrismaPromise<{
        hardwares: import(".prisma/client").Hardware[];
    }[]>;
    findArticleComments(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        articleComments: import(".prisma/client").ArticleComment[];
    }, never>;
    findArticleDocuments(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        articleDocuments: {
            id: number;
            name: string;
            documentType: import(".prisma/client").DocumentType;
        }[];
    }, never>;
    findHardwareComments(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        hardwareComments: import(".prisma/client").HardwareComment[];
    }, never>;
    findHardwareDocuments(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        hardwareDocuments: {
            id: number;
            name: string;
            documentType: import(".prisma/client").DocumentType;
        }[];
    }, never>;
}
