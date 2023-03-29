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
exports.ArticledocumentsController = void 0;
const owner_document_article_guard_1 = require("./../../auth/guards/owner-document-article.guard");
const common_1 = require("@nestjs/common");
const articledocuments_service_1 = require("./articledocuments.service");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../auth/utils/public.decorator");
let ArticledocumentsController = class ArticledocumentsController {
    constructor(articledocumentsService) {
        this.articledocumentsService = articledocumentsService;
    }
    async findOne(id, res) {
        const doc = await this.articledocumentsService.findOne(+id);
        res.set({
            'Content-Type': doc.mimetype,
            'Content-Disposition': `attachment; filename="${doc.name}"`,
        });
        return new common_1.StreamableFile(doc.buffer);
    }
    remove(id) {
        return this.articledocumentsService.remove(+id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ArticledocumentsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_document_article_guard_1.ArticleDocumentOwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticledocumentsController.prototype, "remove", null);
ArticledocumentsController = __decorate([
    (0, swagger_1.ApiTags)('Article Documents'),
    (0, common_1.Controller)('articledocuments'),
    __metadata("design:paramtypes", [articledocuments_service_1.ArticledocumentsService])
], ArticledocumentsController);
exports.ArticledocumentsController = ArticledocumentsController;
//# sourceMappingURL=articledocuments.controller.js.map