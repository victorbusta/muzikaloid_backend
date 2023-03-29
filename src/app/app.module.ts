import { HardwaredocumentsModule } from './../resources/hardwaredocuments/hardwaredocuments.module';
import { HardwarecommentsModule } from './../resources/hardwarecomments/hardwarecomments.module';
import { ArticledocumentsModule } from './../resources/articledocuments/articledocuments.module';
import { ArticlecommentsModule } from './../resources/articlecomments/articlecomments.module';
import { HardwaresModule } from './../resources/hardwares/hardwares.module';
import { DocumenttypesModule } from './../resources/documenttypes/documenttypes.module';
import { ArticlesModule } from './../resources/articles/articles.module';
import { HardwaretypesModule } from './../resources/hardwaretypes/hardwaretypes.module';
import { ArticletypesModule } from './../resources/articletypes/articletypes.module';
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

@Module({
  imports: [
    PrismaModule,
    RolesModule,
    UsersModule,
    ArticletypesModule,
    ArticlesModule,
    ArticlecommentsModule,
    ArticledocumentsModule,
    HardwaretypesModule,
    HardwaresModule,
    HardwarecommentsModule,
    HardwaredocumentsModule,
    DocumenttypesModule,
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
