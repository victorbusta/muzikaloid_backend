import { Module } from '@nestjs/common';
import { HardwareService } from './hardware.service';
import { HardwareController } from './hardware.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from '../users/users.module';
import { ArticlesService } from '../articles/articles.service';

@Module({
  controllers: [HardwareController],
  providers: [HardwareService, ArticlesService],
  imports: [PrismaModule, UsersModule],
})
export class HardwareModule {}
