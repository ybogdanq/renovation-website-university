import { RenovationService } from './renovation.service';
export declare class RenovationController {
    private readonly renovationService;
    constructor(renovationService: RenovationService);
    getAllRenovations(): Promise<import(".prisma/client").Renovation[]>;
}
