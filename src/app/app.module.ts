import { ArticlesModule } from './../resources/articles/articles.module';
import { RolesModule } from '../resources/roles/roles.module';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../resources/users/users.module';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { ArticleTypesModule } from 'src/resources/article-types/article-types.module';
import { CommentsModule } from 'src/resources/comments/comments.module';
import { DocumentsModule } from 'src/resources/documents/documents.module';
import { HardwareModule } from 'src/resources/hardware/hardware.module';
import { HardwareTypesModule } from 'src/resources/hardware-types/hardware-types.module';

@Module({
  imports: [
    PrismaModule,
    RolesModule,
    UsersModule,
    ArticlesModule,
    ArticleTypesModule,
    HardwareModule,
    HardwareTypesModule,
    CommentsModule,
    DocumentsModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
