"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardwaresModule = void 0;
const prisma_module_1 = require("./../../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const hardwares_service_1 = require("./hardwares.service");
const hardwares_controller_1 = require("./hardwares.controller");
let HardwaresModule = class HardwaresModule {
};
HardwaresModule = __decorate([
    (0, common_1.Module)({
        controllers: [hardwares_controller_1.HardwaresController],
        imports: [prisma_module_1.PrismaModule],
        providers: [hardwares_service_1.HardwaresService],
    })
], HardwaresModule);
exports.HardwaresModule = HardwaresModule;
//# sourceMappingURL=hardwares.module.js.map