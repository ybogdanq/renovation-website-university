import { comment, renovation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICommentReq, IRenovationAdditionalData } from 'src/types/Renovation';
export declare class RenovationService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllRenovations(): Promise<IRenovationAdditionalData[]>;
    getRenovationItem(renovationId: string): Promise<IRenovationAdditionalData>;
    serializeRenovation(renovation: renovation): Promise<IRenovationAdditionalData>;
    addNewComment(renovationId: string, commentData: ICommentReq): Promise<comment>;
}
