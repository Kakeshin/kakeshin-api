import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import GithubService from './github.service';

@Controller('github')
export default class GithubController {
  constructor(private readonly service: GithubService) {}

  @Get('/me')
  getGithub(@Res() res: Response) {
    res.status(HttpStatus.OK).json({ res: this.service.getMe() });
  }
}
