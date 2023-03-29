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
exports.HardwaredocumentsController = void 0;
const owner_document_hardware_guard_1 = require("./../../auth/guards/owner-document-hardware.guard");
const common_1 = require("@nestjs/common");
const hardwaredocuments_service_1 = require("./hardwaredocuments.service");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../auth/utils/public.decorator");
let HardwaredocumentsController = class HardwaredocumentsController {
    constructor(hardwaredocumentsService) {
        this.hardwaredocumentsService = hardwaredocumentsService;
    }
    async findOne(id, res) {
        const doc = await this.hardwaredocumentsService.findOne(+id);
        res.set({
            'Content-Type': doc.mimetype,
            'Content-Disposition': `attachment; filename="${doc.name}"`,
        });
        return new common_1.StreamableFile(doc.buffer);
    }
    remove(id) {
        return this.hardwaredocumentsService.remove(+id);
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
], HardwaredocumentsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_document_hardware_guard_1.HardwareDocumentOwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HardwaredocumentsController.prototype, "remove", null);
HardwaredocumentsController = __decorate([
    (0, swagger_1.ApiTags)('Hardware Documents'),
    (0, common_1.Controller)('hardwaredocuments'),
    __metadata("design:paramtypes", [hardwaredocuments_service_1.HardwaredocumentsService])
], HardwaredocumentsController);
exports.HardwaredocumentsController = HardwaredocumentsController;
//# sourceMappingURL=hardwaredocuments.controller.js.map