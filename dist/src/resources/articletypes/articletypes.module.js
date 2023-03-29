"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticletypesModule = void 0;
const common_1 = require("@nestjs/common");
const articletypes_service_1 = require("./articletypes.service");
const articletypes_controller_1 = require("./articletypes.controller");
const prisma_module_1 = require("../../prisma/prisma.module");
let ArticletypesModule = class ArticletypesModule {
};
ArticletypesModule = __decorate([
    (0, common_1.Module)({
        controllers: [articletypes_controller_1.ArticletypesController],
        imports: [prisma_module_1.PrismaModule],
        providers: [articletypes_service_1.ArticletypesService],
    })
], ArticletypesModule);
exports.ArticletypesModule = ArticletypesModule;
//# sourceMappingURL=articletypes.module.js.map