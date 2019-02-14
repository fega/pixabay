/**
 * https://pixabay.com/api/docs/
 */

import axios from 'axios';
import qs from 'qs';


export class Pixabay {
  private URL = 'https://pixabay.com/api/'
  constructor(private readonly apiKey) {
  }

  async get(query, options) {
    const ops = qs.stringify({
      q: query,
      image_type: 'photo',
      webformatURL: '_960',
      key: this.apiKey,
      ...options,
    });
    const url = `${this.URL}?${ops}`;
    const { data } = await axios.get(url);

    return data;
  }
}
