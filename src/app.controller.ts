import { Controller, Get, Post, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import AppService from './app.service';

@Controller()
export default class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(@Res() res: Response) {
    res.status(HttpStatus.OK).json(this.appService.getName());
  }

  @Post('/postHello')
  postHello(@Res() res: Response) {
    res.status(HttpStatus.OK).json(`Post: ${this.appService.asyncGetName()}`);
  }
}
