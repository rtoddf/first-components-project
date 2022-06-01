import { StyledGrid } from './styles/Grid.styles';

import Card from './Card';

function Grid() {
    return (
        <StyledGrid data-col="4">
            <Card />
            <Card />
            <Card />
            <Card />
        </StyledGrid>
    )
}

export default Grid;