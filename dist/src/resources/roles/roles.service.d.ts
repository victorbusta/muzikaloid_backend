import { PrismaService } from 'src/prisma/prisma.service';
export declare class RolesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Role[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__RoleClient<import(".prisma/client").Role, never>;
    findUsers(id: number): import(".prisma/client").Prisma.Prisma__RoleClient<{
        role: string;
        users: {
            id: number;
            username: string;
            email: string;
        }[];
        id: number;
    }, never>;
}
