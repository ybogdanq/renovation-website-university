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
exports.RenovationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RenovationService = class RenovationService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAllRenovations() {
        const renovations = await this.prismaService.renovation.findMany({});
        if (renovations.length === 0) {
            throw new common_1.HttpException('Data not found...', common_1.HttpStatus.BAD_REQUEST);
        }
        const renovationData = [];
        for (const renovation of renovations) {
            renovationData.push(await this.serializeRenovation(renovation));
        }
        return renovationData;
    }
    async getRenovationItem(renovationId) {
        console.log(renovationId);
        const renovationItem = await this.prismaService.renovation.findFirst({
            where: {
                id: Number(renovationId),
            },
        });
        if (!renovationItem) {
            throw new common_1.HttpException('Renovation not found...', common_1.HttpStatus.BAD_REQUEST);
        }
        return await this.serializeRenovation(renovationItem);
    }
    async serializeRenovation(renovation) {
        const comments = await this.prismaService.comment.findMany({
            where: {
                renovationId: renovation.id,
            },
        });
        const rating = await this.prismaService.rating.findFirst({
            where: {
                renovationId: renovation.id,
            },
        });
        return Object.assign(Object.assign({}, renovation), { comments, rating: rating.rating || 0 });
    }
    async addNewComment(renovationId, commentData) {
        const comment = await this.prismaService.comment.create({
            data: {
                renovationId: Number(renovationId),
                message: commentData.message,
            },
        });
        if (!comment) {
            throw new common_1.HttpException('Comment could not be created...', common_1.HttpStatus.BAD_REQUEST);
        }
        return comment;
    }
};
RenovationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RenovationService);
exports.RenovationService = RenovationService;
//# sourceMappingURL=renovation.service.js.map