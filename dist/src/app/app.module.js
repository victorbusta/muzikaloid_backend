"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const hardwaredocuments_module_1 = require("./../resources/hardwaredocuments/hardwaredocuments.module");
const hardwarecomments_module_1 = require("./../resources/hardwarecomments/hardwarecomments.module");
const articledocuments_module_1 = require("./../resources/articledocuments/articledocuments.module");
const articlecomments_module_1 = require("./../resources/articlecomments/articlecomments.module");
const hardwares_module_1 = require("./../resources/hardwares/hardwares.module");
const documenttypes_module_1 = require("./../resources/documenttypes/documenttypes.module");
const articles_module_1 = require("./../resources/articles/articles.module");
const hardwaretypes_module_1 = require("./../resources/hardwaretypes/hardwaretypes.module");
const articletypes_module_1 = require("./../resources/articletypes/articletypes.module");
const roles_module_1 = require("../resources/roles/roles.module");
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("../prisma/prisma.module");
const users_module_1 = require("../resources/users/users.module");
const auth_module_1 = require("../auth/auth.module");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            roles_module_1.RolesModule,
            users_module_1.UsersModule,
            articletypes_module_1.ArticletypesModule,
            articles_module_1.ArticlesModule,
            articlecomments_module_1.ArticlecommentsModule,
            articledocuments_module_1.ArticledocumentsModule,
            hardwaretypes_module_1.HardwaretypesModule,
            hardwares_module_1.HardwaresModule,
            hardwarecomments_module_1.HardwarecommentsModule,
            hardwaredocuments_module_1.HardwaredocumentsModule,
            documenttypes_module_1.DocumenttypesModule,
            auth_module_1.AuthModule,
            jwt_1.JwtModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map