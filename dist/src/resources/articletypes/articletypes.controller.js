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
exports.ArticletypesController = void 0;
const create_article_dto_1 = require("./../articles/dto/create-article.dto");
const common_1 = require("@nestjs/common");
const articletypes_service_1 = require("./articletypes.service");
const public_decorator_1 = require("../../auth/utils/public.decorator");
const swagger_1 = require("@nestjs/swagger");
let ArticletypesController = class ArticletypesController {
    constructor(articletypesService) {
        this.articletypesService = articletypesService;
    }
    findAll() {
        return this.articletypesService.findAll();
    }
    findArticles(id) {
        return this.articletypesService.findArticles(+id);
    }
    createArticle(req, id, createArticleDto) {
        return this.articletypesService.createArticle(req.user.sub, +id, createArticleDto);
    }
    findHardware(id) {
        return this.articletypesService.findHardwares(+id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArticletypesController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/articles'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticletypesController.prototype, "findArticles", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Post)(':id/articles'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", void 0)
], ArticletypesController.prototype, "createArticle", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/hardwares'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArticletypesController.prototype, "findHardware", null);
ArticletypesController = __decorate([
    (0, swagger_1.ApiTags)('Article Types'),
    (0, common_1.Controller)('articletypes'),
    __metadata("design:paramtypes", [articletypes_service_1.ArticletypesService])
], ArticletypesController);
exports.ArticletypesController = ArticletypesController;
//# sourceMappingURL=articletypes.controller.js.map