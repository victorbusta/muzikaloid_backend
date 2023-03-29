import { PrismaService } from 'src/prisma/prisma.service';
export declare class DocumenttypesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").DocumentType[]>;
}
