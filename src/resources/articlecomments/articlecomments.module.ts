import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ArticlecommentsService } from './articlecomments.service';
import { ArticlecommentsController } from './articlecomments.controller';

@Module({
  controllers: [ArticlecommentsController],
  imports: [PrismaModule],
  providers: [ArticlecommentsService],
})
export class ArticlecommentsModule {}
