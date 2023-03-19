import { ArticleMachinesService } from '../article_machines/article_machines.service';
import { ArticleComponentsService } from '../article_components/article_components.service';
import { CommentsService } from '../comments/comments.service';
import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ArticlesController],
  providers: [
    ArticlesService,
    CommentsService,
    ArticleComponentsService,
    ArticleMachinesService,
  ],
  imports: [PrismaModule],
})
export class ArticlesModule {}
