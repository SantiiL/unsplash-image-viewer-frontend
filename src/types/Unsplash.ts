export interface Photo {
    id: string;
    width: number;
    height: number;
    description: string | null;
    urls: {
      thumb: string;
      small: string;
      regular: string;
      full: string;
      raw: string;
    };
    current_user_collections: {
      id: number;
      title: string;
    }[];
  }
  
  export interface SearchResponse {
    total: number;
    total_pages: number;
    results: Photo[];
  }
  