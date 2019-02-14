/**
 * https://pixabay.com/api/docs/
 */

import axios from 'axios';
import qs from 'qs';


interface PixabayImageItem {
  id: number
  pageURL: string
  type: 'photo' | 'illustration' | 'vector'
  tags: string
  previewURL: string
  previewWidth: number
  previewHeight: number
  webformatURL: string
  webformatWidth: number
  webformatHeight: number
  largeImageURL: string
  fullHDURL: string
  imageURL: string
  imageWidth: number
  imageHeight: number
  imageSize: number
  views: number
  downloads: number
  favorites: number
  likes: number
  comments: number
  user_id: number
  user: string
  userImageURL: string
}

interface PixabayResponse {
  total: number
  totalHits: number
  hits: PixabayImageItem[]
}

interface PixabayOptions {
  lang?: "cs" | "da" | "de" | "en" | "es" | "fr" | "id" | "it" | "hu" | "nl" | "no" | "pl" | "pt" | "ro" | "sk" | "fi" | "sv" | "tr" | "vi" | "th" | "bg" | "ru" | "el" | "ja" | "ko" | "zh"
  image_type?: 'all' | 'photo' | 'illustration' | 'vector'
  orientation?: 'all' | 'horizontal' | 'vertical'
  category?: 'fashion' | 'nature' | 'backgrounds' | 'science' | 'education' | 'people' | 'feelings' | 'religion' | 'health' | 'places' | 'animals' | 'industry' | 'food' | 'computer' | 'sports' | 'transportation' | 'travel' | 'buildings' | 'business' | 'music'
  min_width?: number
  min_height?: number
  colors?: "grayscale" | "transparent" | "red" | "orange" | "yellow" | "green" | "turquoise" | "blue" | "lilac" | "pink" | "white" | "gray" | "black" | "brown"
  editors_choice?: boolean
  safesearch?: boolean
  order?: 'popular' | 'latests'
  page?: number
  per_page?: number
  callback?: string
  pretty?: boolean
}

export class Pixabay {
  private URL = 'https://pixabay.com/api/'
  constructor(private readonly apiKey) {
  }

  async get(query: string, options?: PixabayOptions): Promise<PixabayResponse> {
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
