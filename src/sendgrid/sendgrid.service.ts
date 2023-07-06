import { Injectable, Inject } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { email } from './mails/register.mail';
import { log } from 'console';
import { User } from '@prisma/client';

@Injectable()
export class SendGridService {
  constructor(@Inject('SENDGRID_API_KEY') private apiKey: string) {
    sgMail.setApiKey(apiKey);
  }

  async send(user: User, token: string) {
    const url = `${process.env.APP_URL}users/${user.id}/verify/${token}`;

    const msg = {
      to: user.email,
      from: process.env.SENDGRID_EMAIL as string,
      subject: `Cofirmez votre compte`,
      html: email(url),
    };

    return sgMail.send(msg, false, (err, res) => {
      if (err) return false;

      if (res === null || res === undefined) return false;

      return res;
    });
  }
}
