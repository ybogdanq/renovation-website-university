import { renovation } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IRenovationAdditionalData } from 'src/types/Renovation';
export declare class RenovationService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllRenovations(): Promise<IRenovationAdditionalData[]>;
    getRenovationItem(renovationId: number): Promise<IRenovationAdditionalData>;
    serializeRenovation(renovation: renovation): Promise<IRenovationAdditionalData>;
}
