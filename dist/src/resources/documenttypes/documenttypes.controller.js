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
exports.DocumenttypesController = void 0;
const common_1 = require("@nestjs/common");
const documenttypes_service_1 = require("./documenttypes.service");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../auth/utils/public.decorator");
let DocumenttypesController = class DocumenttypesController {
    constructor(documenttypesService) {
        this.documenttypesService = documenttypesService;
    }
    findAll() {
        return this.documenttypesService.findAll();
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocumenttypesController.prototype, "findAll", null);
DocumenttypesController = __decorate([
    (0, swagger_1.ApiTags)('Document Types'),
    (0, common_1.Controller)('documenttypes'),
    __metadata("design:paramtypes", [documenttypes_service_1.DocumenttypesService])
], DocumenttypesController);
exports.DocumenttypesController = DocumenttypesController;
//# sourceMappingURL=documenttypes.controller.js.map