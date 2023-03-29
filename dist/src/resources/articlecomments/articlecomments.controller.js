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
exports.ArticlecommentsController = void 0;
const owner_article_comment_guard_1 = require("./../../auth/guards/owner-article-comment.guard");
const common_1 = require("@nestjs/common");
const articlecomments_service_1 = require("./articlecomments.service");
const update_articlecomment_dto_1 = require("./dto/update-articlecomment.dto");
const swagger_1 = require("@nestjs/swagger");
let ArticlecommentsController = class ArticlecommentsController {
    constructor(articlecommentsService) {
        this.articlecommentsService = articlecommentsService;
    }
    update(id, updateArticlecommentDto) {
        return this.articlecommentsService.update(+id, updateArticlecommentDto);
    }
    remove(id) {
        return this.articlecommentsService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_article_comment_guard_1.ArticleCommentOwnerGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_articlecomment_dto_1.UpdateArticlecommentDto]),
    __metadata("design:returntype", void 0)
], ArticlecommentsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_article_comment_guard_1.ArticleCommentOwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticlecommentsController.prototype, "remove", null);
ArticlecommentsController = __decorate([
    (0, swagger_1.ApiTags)('Articles Comments'),
    (0, common_1.Controller)('articlecomments'),
    __metadata("design:paramtypes", [articlecomments_service_1.ArticlecommentsService])
], ArticlecommentsController);
exports.ArticlecommentsController = ArticlecommentsController;
//# sourceMappingURL=articlecomments.controller.js.map