import { Transporter } from 'nodemailer';
import { IContactRequestData } from 'src/types/Email';
export declare class EmailService {
    transporter: Transporter;
    constructor();
    sendContactRequest(data: IContactRequestData): Promise<void>;
}
