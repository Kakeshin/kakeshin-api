import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AppController from './app.controller';
import AppService from './app.service';
import MailerModule from './mailer/mailer.module';
import GithubModule from './github/github.module';

@Module({
  imports: [MailerModule, GithubModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
