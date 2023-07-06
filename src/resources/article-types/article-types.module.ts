import { Module } from '@nestjs/common';
import { ArticleTypesService } from './article-types.service';
import { ArticleTypesController } from './article-types.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ArticleTypesController],
  providers: [ArticleTypesService],
  imports: [PrismaModule],
})
export class ArticleTypesModule {}
