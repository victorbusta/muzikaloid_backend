import { HardwarecommentsService } from './hardwarecomments.service';
import { UpdateHardwarecommentDto } from './dto/update-hardwarecomment.dto';
export declare class HardwarecommentsController {
    private readonly hardwarecommentsService;
    constructor(hardwarecommentsService: HardwarecommentsService);
    update(id: string, updateHardwarecommentDto: UpdateHardwarecommentDto): import(".prisma/client").Prisma.Prisma__HardwareCommentClient<import(".prisma/client").HardwareComment, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__HardwareCommentClient<import(".prisma/client").HardwareComment, never>;
}
