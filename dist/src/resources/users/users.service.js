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
exports.UsersService = void 0;
const password_hasher_1 = require("../../../bcrypt/password-hasher");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createUserDto) {
        createUserDto.password = (0, password_hasher_1.hashPassword)(createUserDto.password);
        createUserDto.roleId = 2;
        return this.prisma.user.create({
            data: createUserDto,
            select: {
                id: true,
                firstname: true,
                lastname: true,
                username: true,
                email: true,
            },
        });
    }
    findAll() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                firstname: true,
                lastname: true,
                username: true,
                email: true,
                createdAt: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.user.findUnique({
            where: { id: id },
            select: {
                id: true,
                username: true,
                email: true,
                createdAt: true,
                articles: true,
                hardwares: true,
            },
        });
    }
    findOneByEmail(email) {
        return this.prisma.user.findUnique({ where: { email: email } });
    }
    findOneByUsername(username) {
        return this.prisma.user.findUnique({ where: { username: username } });
    }
    update(id, updateUserDto) {
        return this.prisma.user.update({
            where: { id: id },
            data: updateUserDto,
        });
    }
    remove(id) {
        return this.prisma.user.update({
            where: { id: id },
            data: { deletedAt: new Date() },
        });
    }
    findArticles(id) {
        return this.prisma.user.findMany({
            where: { id: id },
            select: { articles: true },
        });
    }
    findArticlesByType(id, typeId) {
        return this.prisma.user.findMany({
            where: { id: id },
            select: {
                articles: {
                    where: {
                        articleTypeId: typeId,
                    },
                },
            },
        });
    }
    findHardwares(id) {
        return this.prisma.user.findMany({
            where: { id: id },
            select: { hardwares: true },
        });
    }
    findHardwaresByType(id, typeId) {
        return this.prisma.user.findMany({
            where: { id: id },
            select: {
                hardwares: {
                    where: {
                        hardwareTypeId: typeId,
                    },
                },
            },
        });
    }
    findArticleComments(id) {
        return this.prisma.user.findUnique({
            where: { id: id },
            select: { articleComments: true },
        });
    }
    findArticleDocuments(id) {
        return this.prisma.user.findUnique({
            where: { id: id },
            select: {
                articleDocuments: {
                    select: { id: true, name: true, documentType: true },
                },
            },
        });
    }
    findHardwareComments(id) {
        return this.prisma.user.findUnique({
            where: { id: id },
            select: { hardwareComments: true },
        });
    }
    findHardwareDocuments(id) {
        return this.prisma.user.findUnique({
            where: { id: id },
            select: {
                hardwareDocuments: {
                    select: { id: true, name: true, documentType: true },
                },
            },
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map