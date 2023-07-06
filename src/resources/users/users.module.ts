import { SendGridModule } from './../../sendgrid/sendgrid.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PrismaModule, SendGridModule],
  exports: [UsersService],
})
export class UsersModule {}
