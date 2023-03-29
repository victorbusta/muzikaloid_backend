import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { DocumenttypesService } from './documenttypes.service';
import { DocumenttypesController } from './documenttypes.controller';

@Module({
  controllers: [DocumenttypesController],
  imports: [PrismaModule],
  providers: [DocumenttypesService],
})
export class DocumenttypesModule {}
