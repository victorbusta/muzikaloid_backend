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
exports.HardwaretypesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let HardwaretypesService = class HardwaretypesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.hardwareType.findMany();
    }
    findHardwares(id) {
        return this.prisma.hardwareType.findUnique({
            where: { id: id },
            select: {
                id: true,
                type: true,
                hardwares: {
                    where: { deletedAt: null },
                    select: {
                        id: true,
                        name: true,
                        brand: true,
                        subDescription: true,
                        isDiy: true,
                        creationDate: true,
                        discontinuationDate: true,
                        createdAt: true,
                    },
                },
            },
        });
    }
    createHardware(userId, hardwareTypeId, createHardwareDto) {
        createHardwareDto.userId = userId;
        createHardwareDto.hardwareTypeId = hardwareTypeId;
        return this.prisma.hardware.create({ data: createHardwareDto });
    }
    findArticles(id) {
        return this.prisma.hardwareType.findUnique({
            where: { id: id },
            select: {
                id: true,
                type: true,
                hardwares: {
                    where: { deletedAt: null },
                    select: {
                        id: true,
                        name: true,
                        brand: true,
                        subDescription: true,
                        isDiy: true,
                        creationDate: true,
                        discontinuationDate: true,
                        createdAt: true,
                        article_hardware: {
                            select: {
                                article: {
                                    select: {
                                        id: true,
                                        name: true,
                                        subDescription: true,
                                        isPublished: true,
                                        articleType: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
};
HardwaretypesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HardwaretypesService);
exports.HardwaretypesService = HardwaretypesService;
//# sourceMappingURL=hardwaretypes.service.js.map