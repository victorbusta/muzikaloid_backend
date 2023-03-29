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
exports.HardwarecommentsController = void 0;
const owner_hardware_comment_guard_1 = require("./../../auth/guards/owner-hardware-comment.guard");
const common_1 = require("@nestjs/common");
const hardwarecomments_service_1 = require("./hardwarecomments.service");
const update_hardwarecomment_dto_1 = require("./dto/update-hardwarecomment.dto");
const swagger_1 = require("@nestjs/swagger");
let HardwarecommentsController = class HardwarecommentsController {
    constructor(hardwarecommentsService) {
        this.hardwarecommentsService = hardwarecommentsService;
    }
    update(id, updateHardwarecommentDto) {
        return this.hardwarecommentsService.update(+id, updateHardwarecommentDto);
    }
    remove(id) {
        return this.hardwarecommentsService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_hardware_comment_guard_1.HardwareCommentOwnerGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hardwarecomment_dto_1.UpdateHardwarecommentDto]),
    __metadata("design:returntype", void 0)
], HardwarecommentsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(owner_hardware_comment_guard_1.HardwareCommentOwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HardwarecommentsController.prototype, "remove", null);
HardwarecommentsController = __decorate([
    (0, swagger_1.ApiTags)('Hardware Comments'),
    (0, common_1.Controller)('hardwarecomments'),
    __metadata("design:paramtypes", [hardwarecomments_service_1.HardwarecommentsService])
], HardwarecommentsController);
exports.HardwarecommentsController = HardwarecommentsController;
//# sourceMappingURL=hardwarecomments.controller.js.map