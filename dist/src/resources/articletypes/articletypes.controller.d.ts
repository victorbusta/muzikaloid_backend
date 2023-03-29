import { CreateArticleDto } from './../articles/dto/create-article.dto';
import { ArticletypesService } from './articletypes.service';
export declare class ArticletypesController {
    private readonly articletypesService;
    constructor(articletypesService: ArticletypesService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").ArticleType[]>;
    findArticles(id: number): import(".prisma/client").Prisma.Prisma__ArticleTypeClient<{
        id: number;
        articles: {
            id: number;
            createdAt: Date;
            name: string;
            subDescription: string;
        }[];
        type: string;
    }, never>;
    createArticle(req: any, id: number, createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    findHardware(id: number): import(".prisma/client").Prisma.Prisma__ArticleTypeClient<{
        id: number;
        articles: {
            id: number;
            createdAt: Date;
            article_hardware: {
                hardware: {
                    id: number;
                    name: string;
                    brand: string;
                    hardwareType: import(".prisma/client").HardwareType;
                };
            }[];
            name: string;
            subDescription: string;
        }[];
        type: string;
    }, never>;
}
