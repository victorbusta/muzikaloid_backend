import { ArticledocumentsService } from './../articledocuments/articledocuments.service';
import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ArticlesController],
  imports: [PrismaModule],
  providers: [ArticlesService, ArticledocumentsService],
})
export class ArticlesModule {}
