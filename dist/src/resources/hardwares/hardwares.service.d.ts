/// <reference types="multer" />
import { CreateHardwareRelationDto } from './dto/create-hardware-relation.dto';
import { UpdateHardwareDto } from './dto/update-hardware.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHardwarecommentDto } from '../hardwarecomments/dto/create-hardwarecomment.dto';
export declare class HardwaresService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Hardware[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__HardwareClient<import(".prisma/client").Hardware, never>;
    update(id: number, updateHardwareDto: UpdateHardwareDto): import(".prisma/client").Prisma.Prisma__HardwareClient<import(".prisma/client").Hardware, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__HardwareClient<import(".prisma/client").Hardware, never>;
    createHardwareRelation(userId: number, id: number, createHardwareRelationDto: CreateHardwareRelationDto): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    findHardwares(id: number): {
        childHardwares: import(".prisma/client").Prisma.PrismaPromise<{
            secondHardware: import(".prisma/client").Hardware;
        }[]>;
        parentHardwares: import(".prisma/client").Prisma.PrismaPromise<{
            firstHardware: import(".prisma/client").Hardware;
        }[]>;
    };
    removeHardware(id: number, hardwareId: number): import(".prisma/client").Prisma.Prisma__Hardware_HardwareClient<import(".prisma/client").Hardware_Hardware, never>;
    findArticles(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        article: import(".prisma/client").Article;
    }[]>;
    findRelation(firstHardwareId: number, secondHardwareId: number): import(".prisma/client").Prisma.Prisma__Hardware_HardwareClient<import(".prisma/client").Hardware_Hardware, never>;
    createComment(userId: number, hardwareId: number, createHardwareCommentDto: CreateHardwarecommentDto): import(".prisma/client").Prisma.Prisma__HardwareCommentClient<import(".prisma/client").HardwareComment, never>;
    findComments(hardwareId: number): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").HardwareComment[]>;
    createDocument(userId: number, hardwareId: number, documentTypeId: number, file: Express.Multer.File): import(".prisma/client").Prisma.Prisma__HardwareDocumentClient<import(".prisma/client").HardwareDocument, never>;
    findDocuments(hardwareId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        documentType: import(".prisma/client").DocumentType;
    }[]>;
}
