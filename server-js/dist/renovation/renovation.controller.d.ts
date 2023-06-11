import { RenovationService } from './renovation.service';
import { ICommentReq } from 'src/types/Renovation';
export declare class RenovationController {
    private renovationService;
    constructor(renovationService: RenovationService);
    getAllRenovations(): Promise<import("src/types/Renovation").IRenovationAdditionalData[]>;
    getRenovationItem(renovationId: string): Promise<import("src/types/Renovation").IRenovationAdditionalData>;
    addNewComment(renovationId: string, body: {
        commentData: ICommentReq;
    }): Promise<import(".prisma/client").comment>;
    addNewRatingItem(renovationId: string, body: {
        ratingCount: number;
    }): Promise<import(".prisma/client").rating>;
}
