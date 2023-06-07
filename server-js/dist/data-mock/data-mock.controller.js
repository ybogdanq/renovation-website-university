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
                name: 'Kitchen',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                price: 100,
                comment: {
                    create: {
                        message: 'We were very satisfied with the design, all our dreams of a beautiful apartment are a reality, now we are waiting for the completion of the repair.',
                    },
                },
                rating: {
                    create: {
                        rating: 5,
                    },
                },
                characteristics: {
                    create: { name: '1 category' },
                },
                imgsrc: 'https://media.architecturaldigest.com/photos/6442da171870ecdbed029950/16:9/w_5521,h_3105,c_limit/AVD%20House%20-%20High%20Res-061.jpg',
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