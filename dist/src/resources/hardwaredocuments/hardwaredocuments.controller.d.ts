import { StreamableFile } from '@nestjs/common';
import { HardwaredocumentsService } from './hardwaredocuments.service';
import type { Response } from 'express';
export declare class HardwaredocumentsController {
    private readonly hardwaredocumentsService;
    constructor(hardwaredocumentsService: HardwaredocumentsService);
    findOne(id: number, res: Response): Promise<StreamableFile>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__HardwareDocumentClient<import(".prisma/client").HardwareDocument, never>;
}
