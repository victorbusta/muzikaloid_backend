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
exports.HardwareDocumentOwnerGuard = void 0;
const hardwaredocuments_service_1 = require("../../resources/hardwaredocuments/hardwaredocuments.service");
const common_1 = require("@nestjs/common");
let HardwareDocumentOwnerGuard = class HardwareDocumentOwnerGuard {
    constructor(hardwareDocumentsService) {
        this.hardwareDocumentsService = hardwareDocumentsService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return this.hardwareDocumentsService
            .findOne(Number(request.params.id))
            .then((document) => {
            if (document.userId !== request.user.sub)
                throw new common_1.HttpException('resource is not yours', 401);
            return true;
        });
    }
};
HardwareDocumentOwnerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hardwaredocuments_service_1.HardwaredocumentsService])
], HardwareDocumentOwnerGuard);
exports.HardwareDocumentOwnerGuard = HardwareDocumentOwnerGuard;
//# sourceMappingURL=owner-document-hardware.guard.js.map