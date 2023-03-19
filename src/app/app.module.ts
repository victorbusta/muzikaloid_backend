import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../resources/users/users.module';
import { ArticlesModule } from '../resources/articles/articles.module';
import { MachinesModule } from '../resources/machines/machines.module';
import { ComponentsModule } from '../resources/components/components.module';
import { DocumentsModule } from '../resources/documents/documents.module';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { CommentsModule } from 'src/resources/comments/comments.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    ArticlesModule,
    MachinesModule,
    ComponentsModule,
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
