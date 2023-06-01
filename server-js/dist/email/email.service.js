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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("nodemailer");
const { GMAIL_PASS_KEY } = process.env;
let EmailService = class EmailService {
    constructor() {
        this.transporter = (0, nodemailer_1.createTransport)({
            host: 'authsmtp.securemail.pro',
            port: 465,
            secure: true,
            auth: {
                user: 'drivenation0@gmail.com',
                pass: GMAIL_PASS_KEY,
            },
        });
    }
    async sendContactRequest(data) {
        console.log(data);
        this.transporter.sendMail({
            from: 'Renovation app',
            to: data.email,
            subject: 'Test',
            html: 'Test',
        });
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map