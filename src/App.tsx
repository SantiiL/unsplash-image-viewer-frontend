import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';
import { Photo } from './types/Unsplash';
import { getPhotos, searchPhotos } from './api/Unsplash';

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(12);

  const fetchPhotos = async (page: number, perPage: number) => {
    try {
      const data = await getPhotos(page, perPage);
      setPhotos(data);
    } catch (err) {
      console.error(err);
    }
  };

  const search = async (term: string, page: number, perPage: number) => {
    try {
      const data = await searchPhotos(term, page, perPage);
      setPhotos(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      search(searchTerm, page, perPage);
    } else {
      fetchPhotos(page, perPage);
    }
  }, [searchTerm, page, perPage]);

  return (
    <Box>
      <SearchBar onSearch={setSearchTerm} />
      <PhotoGrid photos={photos} page={page} setPage={setPage} />
    </Box>
  );
}

export default App;
