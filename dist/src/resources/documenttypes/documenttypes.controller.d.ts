import { DocumenttypesService } from './documenttypes.service';
export declare class DocumenttypesController {
    private readonly documenttypesService;
    constructor(documenttypesService: DocumenttypesService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").DocumentType[]>;
}
