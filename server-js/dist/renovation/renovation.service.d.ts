import { PrismaService } from 'src/prisma/prisma.service';
export declare class RenovationService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").Renovation[]>;
}
