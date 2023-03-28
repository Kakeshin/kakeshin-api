import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface ResultInterface {
  url: string;
  name: string;
  twitter: string;
}

@Injectable()
export default class GithubService {
  async getMe(): Promise<ResultInterface> {
    try {
      const result = await axios.get(
        `${process.env.GITHUB_API_URL}/users/Kakeshin`,
        {
          method: 'GET',
          headers: {
            Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
          },
        }
      );
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { html_url, name, twitter_username } = result.data;
      return {
        url: html_url,
        name,
        twitter: twitter_username,
      };
    } catch (error) {
      return {
        url: '',
        name: '',
        twitter: '',
      };
    }
  }
}
