import Figure from '../Figure';

import { StyledCard } from './Card.styled';
import image from '../../images/capsule.jpg';
// import image from '../../images/casey-cott.jpg';

function Card() {
    return (
        <StyledCard>
            <h4>Headline</h4>
            <Figure image={image} alt="alt tag" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et placerat justo. Mauris malesuada, ipsum et pharetra volutpat, nulla elit congue enim, quis sodales mauris dolor eget ipsum. Cras tellus diam, eleifend non ullamcorper ut, faucibus dignissim neque. Cras in congue dolor, eget accumsan lorem. Nulla tempor augue a ligula lobortis sagittis quis sed risus. Proin at enim augue. Etiam condimentum ac erat id mollis.</p>
        </StyledCard>
    )
}

export default Card;