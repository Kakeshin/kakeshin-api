import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import GithubService from './github.service';

@Controller('github')
export default class GithubController {
  constructor(private readonly service: GithubService) {}

  @Get('/me')
  async getGithub(@Res() res: Response) {
    const result = await this.service.getMe();
    res.status(HttpStatus.OK).json(result);
  }
}
