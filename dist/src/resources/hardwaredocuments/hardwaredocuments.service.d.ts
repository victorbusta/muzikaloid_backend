import { PrismaService } from 'src/prisma/prisma.service';
export declare class HardwaredocumentsService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): import(".prisma/client").Prisma.Prisma__HardwareDocumentClient<import(".prisma/client").HardwareDocument, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__HardwareDocumentClient<import(".prisma/client").HardwareDocument, never>;
}
