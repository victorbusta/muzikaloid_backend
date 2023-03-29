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
exports.HardwaresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let HardwaresService = class HardwaresService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.hardware.findMany();
    }
    findOne(id) {
        return this.prisma.hardware.findUnique({ where: { id: id } });
    }
    update(id, updateHardwareDto) {
        return this.prisma.hardware.update({
            where: { id: id },
            data: updateHardwareDto,
        });
    }
    remove(id) {
        return this.prisma.hardware.update({
            where: { id: id },
            data: { deletedAt: new Date() },
        });
    }
    createHardwareRelation(userId, id, createHardwareRelationDto) {
        const relations = [];
        createHardwareRelationDto.secondaryIds.forEach((secondaryId) => {
            relations.push({
                firstHardwareId: id,
                secondHardwareId: secondaryId,
                userId: userId,
            });
        });
        return this.prisma.hardware_Hardware.createMany({ data: relations });
    }
    findHardwares(id) {
        const childHardwares = this.prisma.hardware_Hardware.findMany({
            where: { firstHardwareId: id },
            select: { secondHardware: true },
        });
        const parentHardwares = this.prisma.hardware_Hardware.findMany({
            where: { secondHardwareId: id },
            select: { firstHardware: true },
        });
        return {
            childHardwares: childHardwares,
            parentHardwares: parentHardwares,
        };
    }
    removeHardware(id, hardwareId) {
        return this.prisma.hardware_Hardware.delete({
            where: {
                hardwareRelationId: {
                    firstHardwareId: id,
                    secondHardwareId: hardwareId,
                },
            },
        });
    }
    findArticles(id) {
        return this.prisma.article_Hardware.findMany({
            where: { hardwareId: id },
            select: { article: true },
        });
    }
    findRelation(firstHardwareId, secondHardwareId) {
        return this.prisma.hardware_Hardware.findUnique({
            where: {
                hardwareRelationId: {
                    firstHardwareId: firstHardwareId,
                    secondHardwareId: secondHardwareId,
                },
            },
        });
    }
    createComment(userId, hardwareId, createHardwareCommentDto) {
        createHardwareCommentDto.hardwareId = hardwareId;
        createHardwareCommentDto.userId = userId;
        return this.prisma.hardwareComment.create({
            data: createHardwareCommentDto,
        });
    }
    findComments(hardwareId) {
        return this.prisma.hardwareComment.findMany({
            where: { hardwareId: hardwareId },
        });
    }
    createDocument(userId, hardwareId, documentTypeId, file) {
        return this.prisma.hardwareDocument.create({
            data: {
                userId: userId,
                hardwareId: hardwareId,
                documentTypeId: documentTypeId,
                name: file.originalname,
                mimetype: file.mimetype,
                buffer: file.buffer,
                size: file.size,
            },
        });
    }
    findDocuments(hardwareId) {
        return this.prisma.hardwareDocument.findMany({
            where: { hardwareId: hardwareId },
            select: { id: true, name: true, documentType: true },
        });
    }
};
HardwaresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HardwaresService);
exports.HardwaresService = HardwaresService;
//# sourceMappingURL=hardwares.service.js.map