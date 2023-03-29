import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DocumenttypesService {
  constructor(private prisma: PrismaService) {}

  // create(createDocumenttypeDto: CreateDocumenttypeDto) {
  //   return 'This action adds a new documenttype';
  // }

  findAll() {
    return this.prisma.documentType.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} documenttype`;
  // }

  // update(id: number, updateDocumenttypeDto: UpdateDocumenttypeDto) {
  //   return `This action updates a #${id} documenttype`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} documenttype`;
  // }
}
