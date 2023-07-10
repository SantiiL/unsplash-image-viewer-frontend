import axios from 'axios';
import { Photo, SearchResponse } from '../types/Unsplash';

const BASE_URL = 'http://localhost:3010';

export const getPhotos = async (page: number, perPage: number): Promise<Photo[]> => {
  const response = await axios.get<Photo[]>(`${BASE_URL}/photos?page=${page}&per_page=${perPage}`);
  return response.data;
}

export const searchPhotos = async (query: string, page: number, perPage: number): Promise<SearchResponse> => {
  const response = await axios.get<SearchResponse>(`${BASE_URL}/search/photos?query=${query}&page=${page}&per_page=${perPage}`);
  return response.data;
}
