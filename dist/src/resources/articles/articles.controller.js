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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesController = void 0;
const create_articlecomment_dto_1 = require("./../articlecomments/dto/create-articlecomment.dto");
const relation_article_hardware_guard_1 = require("../../auth/guards/relation-article-hardware.guard");
const create_article_hardware_relation_dto_1 = require("./dto/create-article-hardware-relation.dto");
const common_1 = require("@nestjs/common");
const articles_service_1 = require("./articles.service");
const create_article_dto_1 = require("./dto/create-article.dto");
const update_article_dto_1 = require("./dto/update-article.dto");
const public_decorator_1 = require("../../auth/utils/public.decorator");
const swagger_1 = require("@nestjs/swagger");
const document_article_guard_1 = require("../../auth/guards/document-article.guard");
const platform_express_1 = require("@nestjs/platform-express");
const owner_article_guard_1 = require("../../auth/guards/owner-article.guard");
let ArticlesController = class ArticlesController {
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    findAll() {
        return this.articlesService.findAll();
    }
    findOne(id) {
        return this.articlesService.findOne(+id);
    }
    update(id, updateArticleDto) {
        return this.articlesService.update(+id, updateArticleDto);
    }
    remove(id) {
        return this.articlesService.remove(+id);
    }
    createArticle(req, id, createArticleDto) {
        return this.articlesService.createArticle(req.user.sub, +id, createArticleDto);
    }
    findArticles(id) {
        return this.articlesService.findArticles(+id);
    }
    createHardwareRelations(req, id, createArticleHardwareRelationDto) {
        return this.articlesService.createHardwareRelations(req.user.sub, +id, createArticleHardwareRelationDto);
    }
    findHardwares(id) {
        return this.articlesService.findHardwares(+id);
    }
    removeHardwareRelation(id, hardwareId) {
        return this.articlesService.removeHardware(+id, +hardwareId);
    }
    createComment(req, id, createArticlecommentDto) {
        return this.articlesService.createComment(req.user.sub, +id, createArticlecommentDto);
    }
    findComments(id) {
        return this.articlesService.findComments(+id);
    }
    createDocument(req, id, typeId, file) {
        console.log(file);
        return this.articlesService.createDocument(req.user.sub, +id, +typeId, file);
    }
    findDocuments(id) {
        return this.articlesService.findDocuments(+id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_article_guard_1.ArticleOwnerGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_article_dto_1.UpdateArticleDto]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_article_guard_1.ArticleOwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Post)(':id/articles'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "createArticle", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/articles'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "findArticles", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_article_guard_1.ArticleOwnerGuard),
    (0, common_1.Post)(':id/hardwares'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_article_hardware_relation_dto_1.CreateArticleHardwareRelationDto]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "createHardwareRelations", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/hardwares'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "findHardwares", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_article_guard_1.ArticleOwnerGuard, relation_article_hardware_guard_1.RelationArticleHardwareGuard),
    (0, common_1.Delete)(':id/hardwares/:hardwareId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('hardwareId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "removeHardwareRelation", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Post)(':id/comments'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_articlecomment_dto_1.CreateArticlecommentDto]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "createComment", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "findComments", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_article_guard_1.ArticleOwnerGuard, document_article_guard_1.ArticleDocumentGuard),
    (0, common_1.Post)(':id/documents/:typeId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('typeId')),
    __param(3, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [new common_1.MaxFileSizeValidator({ maxSize: 100000 })],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "createDocument", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/documents'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "findDocuments", null);
ArticlesController = __decorate([
    (0, swagger_1.ApiTags)('Article'),
    (0, common_1.Controller)('articles'),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
exports.ArticlesController = ArticlesController;
//# sourceMappingURL=articles.controller.js.map