import styled from 'styled-components';

export const StyledHeader = styled.div`
  /* padding: 20px; */
  /* background-color: ${({ bgColor }) => bgColor}; */
  /* background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.body}; */

  h1 {
    margin: 0;
    padding: 0;
    /* color: #9ecfff; */

    &:hover {
      /* color: #fff; */
      cursor: pointer;
    }
  }
`;
