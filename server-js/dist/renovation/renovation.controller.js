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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenovationController = void 0;
const common_1 = require("@nestjs/common");
const renovation_service_1 = require("./renovation.service");
let RenovationController = class RenovationController {
    constructor(renovationService) {
        this.renovationService = renovationService;
    }
    async getAllRenovations() {
        const renovations = await this.renovationService.getAllRenovations();
        return renovations;
    }
    async getRenovationItem(renovationId) {
        const renovationItem = await this.renovationService.getRenovationItem(renovationId);
        return renovationItem;
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RenovationController.prototype, "getAllRenovations", null);
__decorate([
    (0, common_1.Get)(':renovationId'),
    __param(0, (0, common_1.Param)('renovationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RenovationController.prototype, "getRenovationItem", null);
RenovationController = __decorate([
    (0, common_1.Controller)('renovation'),
    __metadata("design:paramtypes", [renovation_service_1.RenovationService])
], RenovationController);
exports.RenovationController = RenovationController;
//# sourceMappingURL=renovation.controller.js.map