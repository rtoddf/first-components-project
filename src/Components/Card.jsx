import { StyledCard } from './styles/Card.styled';

import image from '../images/casey-cott.jpg';

function Card() {
    return (
        <StyledCard>
            <h4>Headline</h4>
            <figure>
                <span className="filler">
                    <img src={image} alt="alt tag" />
                </span>
            </figure>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra ullamcorper maximus.</p>
        </StyledCard>
    )
}

export default Card;