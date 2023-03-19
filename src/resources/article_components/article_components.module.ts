import { Module } from '@nestjs/common';
import { ArticleComponentsService } from './article_components.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ArticleComponentsService],
  imports: [PrismaModule],
})
export class ArticleComponentsModule {}
