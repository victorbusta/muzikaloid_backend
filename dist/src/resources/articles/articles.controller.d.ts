/// <reference types="multer" />
import { CreateArticlecommentDto } from './../articlecomments/dto/create-articlecomment.dto';
import { CreateArticleHardwareRelationDto } from './dto/create-article-hardware-relation.dto';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Article[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    update(id: number, updateArticleDto: UpdateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    createArticle(req: any, id: number, createArticleDto: CreateArticleDto): Promise<import(".prisma/client").Article>;
    findArticles(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        articles: import(".prisma/client").Article[];
    }[]>;
    createHardwareRelations(req: any, id: number, createArticleHardwareRelationDto: CreateArticleHardwareRelationDto): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    findHardwares(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        hardware: import(".prisma/client").Hardware;
    }[]>;
    removeHardwareRelation(id: number, hardwareId: number): import(".prisma/client").Prisma.Prisma__Article_HardwareClient<import(".prisma/client").Article_Hardware, never>;
    createComment(req: any, id: number, createArticlecommentDto: CreateArticlecommentDto): import(".prisma/client").Prisma.Prisma__ArticleCommentClient<import(".prisma/client").ArticleComment, never>;
    findComments(id: number): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").ArticleComment[]>;
    createDocument(req: any, id: number, typeId: number, file: Express.Multer.File): import(".prisma/client").Prisma.Prisma__ArticleDocumentClient<import(".prisma/client").ArticleDocument, never>;
    findDocuments(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        documentType: import(".prisma/client").DocumentType;
    }[]>;
}
