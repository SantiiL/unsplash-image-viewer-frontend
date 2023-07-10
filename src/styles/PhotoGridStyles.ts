import styled from 'styled-components';

export const StyledPhotoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 60px auto;
  max-width: 800px;
`;

export const StyledPhoto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 5px;
`;

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
`;
