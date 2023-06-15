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
        console.log('run');
        const data = await this.prismaService.renovation.create({
            data: {
                name: 'Kids room',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                price: 5000,
                characteristics: [
                    'dimension drawing',
                    'layout with arrangement of furniture and equipment',
                    'preliminary selection of finishing materials, furniture and other key design elements',
                    '3D visualization with real-existing key design elements',
                    'updated furniture plan with purchase recommendations',
                    'dimensional drawings of custom-made furniture',
                ],
                rating: {
                    create: {
                        rating: 0,
                    },
                },
                imgsrc: [
                    'https://www.ikea.com/images/a-kids-room-furnished-with-wooden-furntiture-7e0b46f8f82f1bf71cbae1befe0848ec.jpeg?f=xxxl',
                    'https://www.ikea.com/ext/ingkadam/m/46335517727d264f/original/PH192188.jpg',
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