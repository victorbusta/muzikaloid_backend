import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateHardwarecommentDto } from './dto/update-hardwarecomment.dto';

@Injectable()
export class HardwarecommentsService {
  constructor(private prisma: PrismaService) {}

  findOne(id: number) {
    return this.prisma.hardwareComment.findUnique({ where: { id: id } });
  }

  update(id: number, updateHardwarecommentDto: UpdateHardwarecommentDto) {
    updateHardwarecommentDto.modifiedAt = new Date();

    return this.prisma.hardwareComment.update({
      where: { id: id },
      data: updateHardwarecommentDto,
    });
  }

  remove(id: number) {
    return this.prisma.hardwareComment.update({
      where: { id: id },
      data: { deletedAt: new Date() },
    });
  }
}
