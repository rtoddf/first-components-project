import { StyledGrid } from './styles/Grid.styles';

function Grid({children}) {
    return (
        <StyledGrid data-col="4">
            { children }
        </StyledGrid>
    )
}

export default Grid;