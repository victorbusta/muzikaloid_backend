"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ArticlesService = class ArticlesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.article.findMany({ where: { isPublished: true } });
    }
    findOne(id) {
        return this.prisma.article.findUnique({ where: { id: id } });
    }
    update(id, updateArticleDto) {
        return this.prisma.article.update({
            where: { id: id },
            data: updateArticleDto,
        });
    }
    remove(id) {
        return this.prisma.article.update({
            where: { id: id },
            data: { deletedAt: new Date() },
        });
    }
    async createArticle(userId, articleId, createArticleDto) {
        const parentArticle = await this.findOne(articleId);
        createArticleDto.userId = userId;
        createArticleDto.articleId = parentArticle.id;
        createArticleDto.isPublished = true;
        createArticleDto.articleTypeId = parentArticle.articleTypeId;
        return this.prisma.article.create({ data: createArticleDto });
    }
    findArticles(id) {
        return this.prisma.article.findMany({
            where: { id: id },
            select: { articles: true },
        });
    }
    createHardwareRelations(userId, id, createArticleHardwareRelationDto) {
        const relations = [];
        createArticleHardwareRelationDto.hardwareIds.forEach((hardwareId) => {
            relations.push({ userId: userId, articleId: id, hardwareId: hardwareId });
        });
        return this.prisma.article_Hardware.createMany({
            data: relations,
        });
    }
    findHardwares(id) {
        return this.prisma.article_Hardware.findMany({
            where: { articleId: id },
            select: { hardware: true },
        });
    }
    removeHardware(id, hardwareId) {
        return this.prisma.article_Hardware.delete({
            where: {
                articleHardwareId: {
                    articleId: id,
                    hardwareId: hardwareId,
                },
            },
        });
    }
    findHardwareRelation(articleId, hardwareId) {
        return this.prisma.article_Hardware.findUnique({
            where: {
                articleHardwareId: { articleId: articleId, hardwareId: hardwareId },
            },
        });
    }
    createComment(userId, articleId, createArticleCommentDto) {
        createArticleCommentDto.articleId = articleId;
        createArticleCommentDto.userId = userId;
        return this.prisma.articleComment.create({ data: createArticleCommentDto });
    }
    findComments(articleId) {
        return this.prisma.articleComment.findMany({
            where: { articleId: articleId },
        });
    }
    createDocument(userId, articleId, documentTypeId, file) {
        return this.prisma.articleDocument.create({
            data: {
                userId: userId,
                articleId: articleId,
                documentTypeId: documentTypeId,
                name: file.originalname,
                mimetype: file.mimetype,
                buffer: file.buffer,
                size: file.size,
            },
        });
    }
    findDocuments(articleId) {
        return this.prisma.articleDocument.findMany({
            where: { articleId: articleId },
            select: { id: true, name: true, documentType: true },
        });
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map