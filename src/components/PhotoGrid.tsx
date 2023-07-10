import React from 'react';
import { StyledPhotoGrid, StyledPhoto, StyledPagination } from '../styles/PhotoGridStyles';
import { Button } from '@mui/material';
import { Photo } from '../types/Unsplash';

interface PhotoGridProps {
  photos: Photo[];
  page: number;
  setPage: (page: number) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, page, setPage }) => {
  return (
    <StyledPhotoGrid>
      {photos.map((photo) => (
        <StyledPhoto
          key={photo.id}
          src={photo.urls.small}
          alt={photo.description || 'Unsplash photo'}
        />
      ))}
      <StyledPagination>
        <Button onClick={() => setPage(page - 1)} disabled={page <= 1}>Previous Page</Button>
        <Button onClick={() => setPage(page + 1)}>Next Page</Button>
      </StyledPagination>
    </StyledPhotoGrid>
  );
};

export default PhotoGrid;
