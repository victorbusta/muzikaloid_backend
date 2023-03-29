/// <reference types="multer" />
import { CreateArticlecommentDto } from './../articlecomments/dto/create-articlecomment.dto';
import { CreateArticleHardwareRelationDto } from './dto/create-article-hardware-relation.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ArticlesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Article[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    update(id: number, updateArticleDto: UpdateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    createArticle(userId: number, articleId: number, createArticleDto: CreateArticleDto): Promise<import(".prisma/client").Article>;
    findArticles(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        articles: import(".prisma/client").Article[];
    }[]>;
    createHardwareRelations(userId: number, id: number, createArticleHardwareRelationDto: CreateArticleHardwareRelationDto): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    findHardwares(id: number): import(".prisma/client").Prisma.PrismaPromise<{
        hardware: import(".prisma/client").Hardware;
    }[]>;
    removeHardware(id: number, hardwareId: number): import(".prisma/client").Prisma.Prisma__Article_HardwareClient<import(".prisma/client").Article_Hardware, never>;
    findHardwareRelation(articleId: number, hardwareId: number): import(".prisma/client").Prisma.Prisma__Article_HardwareClient<import(".prisma/client").Article_Hardware, never>;
    createComment(userId: number, articleId: number, createArticleCommentDto: CreateArticlecommentDto): import(".prisma/client").Prisma.Prisma__ArticleCommentClient<import(".prisma/client").ArticleComment, never>;
    findComments(articleId: number): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").ArticleComment[]>;
    createDocument(userId: number, articleId: number, documentTypeId: number, file: Express.Multer.File): import(".prisma/client").Prisma.Prisma__ArticleDocumentClient<import(".prisma/client").ArticleDocument, never>;
    findDocuments(articleId: number): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        documentType: import(".prisma/client").DocumentType;
    }[]>;
}
