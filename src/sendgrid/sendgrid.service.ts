import { Injectable, Inject } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class SendGridService {
  constructor(@Inject('SENDGRID_API_KEY') private apiKey: string) {
    sgMail.setApiKey(apiKey);
  }

  async send(to: string, orderId: number, price: number, token: string) {
    const msg = {
      to,
      from: process.env.SENDGRID_EMAIL as string,
      subject: `Cofirmez votre commande n#${orderId}`,
      html: `<p>Merci d'avoir passé commande sur ma boutique :).<br>Afin de valider ta commande il faut envoyer ${price} au paypal **PaypalAccount**,<br>Suite a cela, Clique sur <a href=${process.env.APP_URL}order/${orderId}/verify?token=${token}>ce lien</a> pour finaliser la prise de commande</p>`,
    };
    return sgMail.send(msg);
  }
}
