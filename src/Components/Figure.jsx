import { StyledFigure } from './styles/Figure.styled';

function Figure({ image, alt, shape }) {
    return (
        <StyledFigure shape={shape}>
            <span className="filler">
                <img src={image} alt={alt} />
            </span>
        </StyledFigure>
    )
}

export default Figure;