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
exports.HardwaretypesController = void 0;
const create_hardware_dto_1 = require("./../hardwares/dto/create-hardware.dto");
const common_1 = require("@nestjs/common");
const hardwaretypes_service_1 = require("./hardwaretypes.service");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../auth/utils/public.decorator");
let HardwaretypesController = class HardwaretypesController {
    constructor(hardwaretypesService) {
        this.hardwaretypesService = hardwaretypesService;
    }
    findAll() {
        return this.hardwaretypesService.findAll();
    }
    findHardwares(id) {
        return this.hardwaretypesService.findHardwares(+id);
    }
    createArticle(req, id, createHardwareDto) {
        return this.hardwaretypesService.createHardware(req.user.sub, +id, createHardwareDto);
    }
    findArticles(id) {
        return this.hardwaretypesService.findArticles(+id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HardwaretypesController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/hardwares'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HardwaretypesController.prototype, "findHardwares", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Post)(':id/articles'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_hardware_dto_1.CreateHardwareDto]),
    __metadata("design:returntype", void 0)
], HardwaretypesController.prototype, "createArticle", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/articles'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HardwaretypesController.prototype, "findArticles", null);
HardwaretypesController = __decorate([
    (0, swagger_1.ApiTags)('Hardware Types'),
    (0, common_1.Controller)('hardwaretypes'),
    __metadata("design:paramtypes", [hardwaretypes_service_1.HardwaretypesService])
], HardwaretypesController);
exports.HardwaretypesController = HardwaretypesController;
//# sourceMappingURL=hardwaretypes.controller.js.map