import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateHardwaredocumentDto } from './dto/create-hardwaredocument.dto';
import { UpdateHardwaredocumentDto } from './dto/update-hardwaredocument.dto';

@Injectable()
export class HardwaredocumentsService {
  constructor(private prisma: PrismaService) {}

  findOne(id: number) {
    return this.prisma.hardwareDocument.findUnique({ where: { id: id } });
  }

  remove(id: number) {
    return this.prisma.hardwareDocument.delete({ where: { id: id } });
  }
}
