import { PrismaService } from 'src/prisma/prisma.service';
export declare class DataMockController {
    private prismaService;
    constructor(prismaService: PrismaService);
    generateData(): Promise<import(".prisma/client").renovation>;
}
