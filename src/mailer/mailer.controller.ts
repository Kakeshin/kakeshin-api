import { Controller, Post, Res, Req, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { Mailer } from './mailer.interface';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post()
  async findAll(@Body() mailer: Mailer, @Res() res: Response) {
    res.status(HttpStatus.OK).json(await this.mailerService.getHello(mailer));
  }
}
