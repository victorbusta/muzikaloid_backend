import { Module } from '@nestjs/common';
import { ArticleMachinesService } from './article_machines.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ArticleMachinesService],
  imports: [PrismaModule],
})
export class ArticleMachinesModule {}
