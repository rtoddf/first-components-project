import styled from 'styled-components';

export const StyledFigure = styled.figure`
  margin: 0 -20px 10px;

  .filler {
    display: inline-block;
    position: relative;
    width: 100%;
    max-height: 100%;
    padding-bottom: 56%;
    overflow: ${({ shape }) => (shape === 'circle' ? 'visible' : 'hidden')};
    background: ${({ shape }) => (shape === 'circle' ? 'transparent' : '#222')};

    > img {
      display: block;
      position: absolute;
      top: 25%;
      left: 50%;
      width: auto;
      max-width: 102%;
      height: 102%;
      max-height: 102%;
      transform: translate(-50%, -25%);
      text-align: center;

      ${(props) =>
        props.shape === 'circle'
          ? `
        border: none;
        box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        `
          : ''}
    }
  }
`;
