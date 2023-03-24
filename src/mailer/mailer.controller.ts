import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { Mailer } from './mailer.interface';
import MailerService from './mailer.service';

@Controller()
export default class MailerController {
  @Post('mailer')
  async findAll(@Body() mailer: Mailer, @Res() res: Response) {
    res.status(HttpStatus.OK).json(await MailerService.getHello(mailer));
  }
}
