import { RenovationService } from './renovation.service';
export declare class RenovationController {
    private renovationService;
    constructor(renovationService: RenovationService);
    getAllRenovations(): Promise<import("./renovation.service").IRenovationAdditionalData[]>;
    getRenovationItem(renovationId: number): Promise<import("./renovation.service").IRenovationAdditionalData>;
}
