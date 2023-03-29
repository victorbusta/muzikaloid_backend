import { CreateHardwareDto } from './../hardwares/dto/create-hardware.dto';
import { HardwaretypesService } from './hardwaretypes.service';
export declare class HardwaretypesController {
    private readonly hardwaretypesService;
    constructor(hardwaretypesService: HardwaretypesService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").HardwareType[]>;
    findHardwares(id: number): import(".prisma/client").Prisma.Prisma__HardwareTypeClient<{
        id: number;
        hardwares: {
            id: number;
            createdAt: Date;
            name: string;
            subDescription: string;
            brand: string;
            isDiy: boolean;
            creationDate: Date;
            discontinuationDate: Date;
        }[];
        type: string;
    }, never>;
    createArticle(req: any, id: number, createHardwareDto: CreateHardwareDto): import(".prisma/client").Prisma.Prisma__HardwareClient<import(".prisma/client").Hardware, never>;
    findArticles(id: number): import(".prisma/client").Prisma.Prisma__HardwareTypeClient<{
        id: number;
        hardwares: {
            id: number;
            createdAt: Date;
            article_hardware: {
                article: {
                    id: number;
                    name: string;
                    subDescription: string;
                    isPublished: boolean;
                    articleType: import(".prisma/client").ArticleType;
                };
            }[];
            name: string;
            subDescription: string;
            brand: string;
            isDiy: boolean;
            creationDate: Date;
            discontinuationDate: Date;
        }[];
        type: string;
    }, never>;
}
