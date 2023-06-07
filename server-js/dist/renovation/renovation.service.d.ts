import { comment, renovation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export interface IRenovationAdditionalData {
    comments: comment[];
    rating: number;
    characteristics: string[];
}
export type IRenovationResponse = renovation & IRenovationAdditionalData;
export declare class RenovationService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllRenovations(): Promise<IRenovationAdditionalData[]>;
    getRenovationItem(renovationId: number): Promise<IRenovationAdditionalData>;
    serializeRenovation(renovation: renovation): Promise<IRenovationAdditionalData>;
}
