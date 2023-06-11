import { RenovationService } from './renovation.service';
export declare class RenovationController {
    private renovationService;
    constructor(renovationService: RenovationService);
    getAllRenovations(): Promise<import("../types/Renovation").IRenovationAdditionalData[]>;
    getRenovationItem(renovationId: number): Promise<import("../types/Renovation").IRenovationAdditionalData>;
}
