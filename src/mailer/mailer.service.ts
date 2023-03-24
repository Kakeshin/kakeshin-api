import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Mailer } from './mailer.interface';

@Injectable()
export default class MailerService {
  async getHello(mailer: Mailer): Promise<string> {
    if (mailer.token !== `${process.env.TOKEN}`) {
      return 'Bad Send';
    }

    try {
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_ADDRESS,
        port: 465,
        secure: true,
        auth: {
          user: process.env.ACCOUNT_ADDRESS,
          pass: process.env.ACCOUNT_PASS,
        },
      });

      const result = transport
        .sendMail({
          from: process.env.ACCOUNT_ADDRESS,
          to: mailer.address,
          subject: 'お問合せ',
          html: `<p>${mailer.name}様。<br><br>この度はお問合せいただき、ありがとうございます。<br><br>以下、お問合せ内容です。<br>---------------------------------------------<br>${mailer.message}</p>`,
        })
        .then((results) => results.response)
        .catch((err) => err.string);

      return await result;
    } catch (err) {
      return err.string;
    }
  }
}
