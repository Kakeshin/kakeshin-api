import { Injectable } from '@nestjs/common';

import { App } from './app.interface';

@Injectable()
export class AppService {
  private readonly app: App = {
    name: 'Axe',
  };

  getName(): App {
    return this.app;
  }
}
