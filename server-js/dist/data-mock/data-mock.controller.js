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
exports.DataMockController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DataMockController = class DataMockController {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async generateData() {
        const data = await this.prismaService.renovation.create({
            data: {
                name: 'Bedroom room',
                description: "Bedroom room's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
                price: 10000,
                characteristics: [
                    'dimension drawing',
                    'layout with arrangement of furniture and equipment',
                    'preliminary selection of finishing materials, furniture and other key design elements',
                ],
                imgsrc: [
                    'https://www.ikea.com/images/a-sunny-bedroom-with-a-pax-reinsvoll-wardrobe-combination-by-c68c1de5c96929e60217c67374b9fe73.jpg',
                    'https://www.ikea.com/images/link-to-a-comfy-living-room-bedroom-combo-image-of-a-living--1c5291a14e4a20dc32a78493d0f792cf.jpg?f=xxxl',
                ],
            },
        });
        return data;
    }
};
__decorate([
    (0, common_1.Post)('/generate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DataMockController.prototype, "generateData", null);
DataMockController = __decorate([
    (0, common_1.Controller)('data-mock'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DataMockController);
exports.DataMockController = DataMockController;
//# sourceMappingURL=data-mock.controller.js.map