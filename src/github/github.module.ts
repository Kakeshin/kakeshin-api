import { Module } from '@nestjs/common';
import GithubController from './github.controller';
import GithubService from './github.service';

@Module({
  providers: [GithubService],
  controllers: [GithubController],
})
export default class GithubModule {}
