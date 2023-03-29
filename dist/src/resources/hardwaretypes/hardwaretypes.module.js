"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardwaretypesModule = void 0;
const prisma_module_1 = require("./../../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const hardwaretypes_service_1 = require("./hardwaretypes.service");
const hardwaretypes_controller_1 = require("./hardwaretypes.controller");
let HardwaretypesModule = class HardwaretypesModule {
};
HardwaretypesModule = __decorate([
    (0, common_1.Module)({
        controllers: [hardwaretypes_controller_1.HardwaretypesController],
        imports: [prisma_module_1.PrismaModule],
        providers: [hardwaretypes_service_1.HardwaretypesService],
    })
], HardwaretypesModule);
exports.HardwaretypesModule = HardwaretypesModule;
//# sourceMappingURL=hardwaretypes.module.js.map