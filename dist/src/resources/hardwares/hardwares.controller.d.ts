/// <reference types="multer" />
import { CreateHardwarecommentDto } from './../hardwarecomments/dto/create-hardwarecomment.dto';
import { HardwaresService } from './hardwares.service';
import { UpdateHardwareDto } from './dto/update-hardware.dto';
import { CreateHardwareRelationDto } from './dto/create-hardware-relation.dto';
export declare class HardwaresController {
    private readonly hardwaresService;
    constructor(hardwaresService: HardwaresService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Hardware[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__HardwareClient<import(".prisma/client").Hardware, never>;
    update(id: number, updateHardwareDto: UpdateHardwareDto): import(".prisma/client").Prisma.Prisma__HardwareClient<import(".prisma/client").Hardware, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__HardwareClient<import(".prisma/client").Hardware, never>;
    createHardwareRelation(req: any, id: number, createHardwareRelationDto: CreateHardwareRelationDto): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    findHardwares(id: number): {
        childHardwares: import(".prisma/client").Prisma.PrismaPromise<{
            secondHardware: import(".prisma/client").Hardware;
        }[]>;
        parentHardwares: import(".prisma/client").Prisma.PrismaPromise<{
            firstHardware: import(".prisma/client").Hardware;
        }[]>;
    };
    removeHardwares(id: number, hardwareId: number): import(".prisma/client").Prisma.Prisma__Hardware_HardwareClient<import(".prisma/client").Hardware_Hardware, never>;
    findArticles(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        article: import(".prisma/client").Article;
    }[]>;
    createComment(req: any, id: number, createHardwarecommentDto: CreateHardwarecommentDto): import(".prisma/client").Prisma.Prisma__HardwareCommentClient<import(".prisma/client").HardwareComment, never>;
    findComments(id: number): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").HardwareComment[]>;
    createDocument(req: any, id: number, typeId: number, file: Express.Multer.File): import(".prisma/client").Prisma.Prisma__HardwareDocumentClient<import(".prisma/client").HardwareDocument, never>;
    findDocuments(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        documentType: import(".prisma/client").DocumentType;
    }[]>;
}
