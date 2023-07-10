import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { StyledSearchBar } from '../styles/SearchBarStyles';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(term);
  };

  return (
    <StyledSearchBar>
      <form onSubmit={onSubmit}>
        <TextField 
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search photos"
        />
        <Button type="submit">Search</Button>
      </form>
    </StyledSearchBar>
  );
};

export default SearchBar;
