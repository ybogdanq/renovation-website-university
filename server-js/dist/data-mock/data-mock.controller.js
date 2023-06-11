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
                name: 'Living room',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                price: 1900,
                comment: {
                    create: {
                        message: 'We were very satisfied with the design, all our dreams of a beautiful apartment are a reality, now we are waiting for the completion of the repair.',
                    },
                },
                rating: {
                    create: {
                        rating: 4,
                    },
                },
                characteristics: {
                    create: { name: '1 category' },
                },
                imgsrc: 'https://www.ikea.com/images/a-light-living-room-centred-around-a-jaettebo-three-and-a-ha-d80334e03b4e4094d0e02846c7de2e85.jpg',
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