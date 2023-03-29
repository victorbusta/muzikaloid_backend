import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateHardwarecommentDto } from './dto/update-hardwarecomment.dto';
export declare class HardwarecommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): import(".prisma/client").Prisma.Prisma__HardwareCommentClient<import(".prisma/client").HardwareComment, never>;
    update(id: number, updateHardwarecommentDto: UpdateHardwarecommentDto): import(".prisma/client").Prisma.Prisma__HardwareCommentClient<import(".prisma/client").HardwareComment, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__HardwareCommentClient<import(".prisma/client").HardwareComment, never>;
}
