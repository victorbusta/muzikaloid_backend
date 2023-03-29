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
exports.UniqueUserGuard = void 0;
const users_service_1 = require("../../resources/users/users.service");
const common_1 = require("@nestjs/common");
let UniqueUserGuard = class UniqueUserGuard {
    constructor(userService) {
        this.userService = userService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return this.userService.findOneByEmail(request.body.email).then((val) => {
            if (val)
                throw new common_1.HttpException(`user with email '${request.body.email}' already exist`, 401);
            return this.userService
                .findOneByUsername(request.body.username)
                .then((val) => {
                if (val)
                    throw new common_1.HttpException(`user with username '${request.body.username}' already exist`, 401);
                return true;
            });
        });
    }
};
UniqueUserGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UniqueUserGuard);
exports.UniqueUserGuard = UniqueUserGuard;
//# sourceMappingURL=unique-user.guard.js.map