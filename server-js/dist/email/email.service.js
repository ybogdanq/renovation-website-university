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
const { GMAIL_PASS_KEY, GMAIL_USER } = process.env;
console.log(GMAIL_PASS_KEY, GMAIL_USER);
let EmailService = class EmailService {
    constructor() {
        this.transporter = (0, nodemailer_1.createTransport)({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASS_KEY,
            },
        });
    }
    async sendContactRequest(data) {
        await this.transporter.sendMail({
            from: 'Renovation app',
            to: data.email,
            subject: 'Renovation request',
            html: `
        <div>
          <h3>Congrats! You have requested renovation withing our service</h3>
          <h3>Additional info you have provided for our managers:</h3>
          <div>${data.additionalInfo}</div>
        </div>`,
        });
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map