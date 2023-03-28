import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface ResultInterface {
  html_url: string;
  name: string;
  twitter_username: string;
  message: string;
}

@Injectable()
export default class GithubService {
  async getMe(): Promise<ResultInterface> {
    try {
      const result = await axios.get('https://api.github.com/users/Kakeshin');
      return {
        html_url: result.data.html_url,
        name: result.data.name,
        twitter_username: result.data.twitter_username,
        message: '',
      };
    } catch (error) {
      return {
        html_url: '',
        name: '',
        twitter_username: '',
        message: `${error}`,
      };
    }
  }
}
