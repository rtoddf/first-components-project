import Figure from './Figure';

import { StyledCard } from './styles/Card.styled';
import image from '../images/capsule.jpg';

function Card() {
    return (
        <StyledCard>
            <h4>Headline</h4>
            <Figure image={image} alt="alt tag" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra ullamcorper maximus.</p>
        </StyledCard>
    )
}

export default Card;