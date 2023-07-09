import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { DocumentsService } from '../documents/documents.service';
import { CommentsService } from '../comments/comments.service';
import { ImageKitModule } from 'src/imagekit/imagekit.module';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, DocumentsService, CommentsService],
  imports: [PrismaModule, UsersModule, ImageKitModule],
})
export class ArticlesModule {}
