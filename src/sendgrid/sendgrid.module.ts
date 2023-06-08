import { Module } from '@nestjs/common';
import { SendGridService } from './sendgrid.service';
import * as sgMail from '@sendgrid/mail';

@Module({
  providers: [
    SendGridService,
    {
      provide: 'SENDGRID_API_KEY',
      useValue: process.env.SENDGRID_API_KEY as string,
    },
    SendGridService,
  ],
  exports: [SendGridService],
})
export class SendGridModule {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  }
}
