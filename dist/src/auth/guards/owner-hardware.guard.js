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
exports.HardwareOwnerGuard = void 0;
const hardwares_service_1 = require("./../../resources/hardwares/hardwares.service");
const common_1 = require("@nestjs/common");
let HardwareOwnerGuard = class HardwareOwnerGuard {
    constructor(hardwaresService) {
        this.hardwaresService = hardwaresService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return this.hardwaresService
            .findOne(Number(request.params.id))
            .then((hardware) => {
            if (request.user.seb === 1)
                return true;
            if (!hardware || hardware.deletedAt != null)
                throw new common_1.HttpException('resource does not exist', 401);
            if (hardware.userId !== request.user.sub)
                throw new common_1.HttpException('resource is not yours', 401);
            return true;
        });
    }
};
HardwareOwnerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hardwares_service_1.HardwaresService])
], HardwareOwnerGuard);
exports.HardwareOwnerGuard = HardwareOwnerGuard;
//# sourceMappingURL=owner-hardware.guard.js.map