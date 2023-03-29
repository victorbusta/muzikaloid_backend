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
exports.HardwaresController = void 0;
const document_hardware_guard_1 = require("./../../auth/guards/document-hardware.guard");
const create_hardwarecomment_dto_1 = require("./../hardwarecomments/dto/create-hardwarecomment.dto");
const relation_hardware_guard_1 = require("./../../auth/guards/relation-hardware.guard");
const owner_hardware_guard_1 = require("./../../auth/guards/owner-hardware.guard");
const common_1 = require("@nestjs/common");
const hardwares_service_1 = require("./hardwares.service");
const update_hardware_dto_1 = require("./dto/update-hardware.dto");
const swagger_1 = require("@nestjs/swagger");
const create_hardware_relation_dto_1 = require("./dto/create-hardware-relation.dto");
const public_decorator_1 = require("../../auth/utils/public.decorator");
const platform_express_1 = require("@nestjs/platform-express");
let HardwaresController = class HardwaresController {
    constructor(hardwaresService) {
        this.hardwaresService = hardwaresService;
    }
    findAll() {
        return this.hardwaresService.findAll();
    }
    findOne(id) {
        return this.hardwaresService.findOne(+id);
    }
    update(id, updateHardwareDto) {
        return this.hardwaresService.update(+id, updateHardwareDto);
    }
    remove(id) {
        return this.hardwaresService.remove(+id);
    }
    createHardwareRelation(req, id, createHardwareRelationDto) {
        return this.hardwaresService.createHardwareRelation(req.user.sub, +id, createHardwareRelationDto);
    }
    findHardwares(id) {
        return this.hardwaresService.findHardwares(+id);
    }
    removeHardwares(id, hardwareId) {
        return this.hardwaresService.removeHardware(+id, +hardwareId);
    }
    findArticles(id) {
        return this.hardwaresService.findArticles(+id);
    }
    createComment(req, id, createHardwarecommentDto) {
        return this.hardwaresService.createComment(req.user.sub, +id, createHardwarecommentDto);
    }
    findComments(id) {
        return this.hardwaresService.findComments(+id);
    }
    createDocument(req, id, typeId, file) {
        console.log(file);
        return this.hardwaresService.createDocument(req.user.sub, +id, +typeId, file);
    }
    findDocuments(id) {
        return this.hardwaresService.findDocuments(+id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_hardware_guard_1.HardwareOwnerGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_hardware_dto_1.UpdateHardwareDto]),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_hardware_guard_1.HardwareOwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_hardware_guard_1.HardwareOwnerGuard),
    (0, common_1.Post)(':id/hardwares'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_hardware_relation_dto_1.CreateHardwareRelationDto]),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "createHardwareRelation", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/hardwares'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "findHardwares", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_hardware_guard_1.HardwareOwnerGuard, relation_hardware_guard_1.RelationHardwareGuard),
    (0, common_1.Delete)(':id/hardwares/:hardwareId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('hardwareId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "removeHardwares", null);
__decorate([
    (0, common_1.Get)(':id/articles'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "findArticles", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Post)(':id/comments'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, create_hardwarecomment_dto_1.CreateHardwarecommentDto]),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "createComment", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "findComments", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_hardware_guard_1.HardwareOwnerGuard, document_hardware_guard_1.HardwareDocumentGuard),
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
], HardwaresController.prototype, "createDocument", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id/documents'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HardwaresController.prototype, "findDocuments", null);
HardwaresController = __decorate([
    (0, swagger_1.ApiTags)('Hadwares'),
    (0, common_1.Controller)('hardwares'),
    __metadata("design:paramtypes", [hardwares_service_1.HardwaresService])
], HardwaresController);
exports.HardwaresController = HardwaresController;
//# sourceMappingURL=hardwares.controller.js.map