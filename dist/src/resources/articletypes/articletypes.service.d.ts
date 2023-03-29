import { CreateArticleDto } from './../articles/dto/create-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ArticletypesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    createArticle(userId: number, articleTypeId: number, createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    findHardwares(id: number): import(".prisma/client").Prisma.Prisma__ArticleTypeClient<{
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
