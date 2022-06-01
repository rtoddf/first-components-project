import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  display: -ms-grid;
  grid-gap: 2.5rem;
  width: 100%;
  margin: 0 auto;

  &[data-col='4'] {
    grid-template-columns: repeat(4, [col] 1fr);
  }
`;
