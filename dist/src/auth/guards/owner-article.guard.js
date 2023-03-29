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
exports.ArticleOwnerGuard = void 0;
const articles_service_1 = require("../../resources/articles/articles.service");
const common_1 = require("@nestjs/common");
let ArticleOwnerGuard = class ArticleOwnerGuard {
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return this.articlesService
            .findOne(Number(request.params.id))
            .then((article) => {
            if (request.user.seb === 1)
                return true;
            if (!article || article.deletedAt != null)
                throw new common_1.HttpException('resource does not exist', 401);
            if (article.userId !== request.user.sub)
                throw new common_1.HttpException('resource is not yours', 401);
            return true;
        });
    }
};
ArticleOwnerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticleOwnerGuard);
exports.ArticleOwnerGuard = ArticleOwnerGuard;
//# sourceMappingURL=owner-article.guard.js.map