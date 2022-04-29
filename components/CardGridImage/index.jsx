import {
  SecureSection,
  SecureContainer,
  SecureGrid,
  SecureCard,
  CardTitle,
  CardText,
} from './CardGridImage.style.js';

import Image from 'next/image';
import popSecure from '../../assets/secimg.png';

export default function CardGridImage({ cards }) {
  return (
    <SecureSection>
      <SecureContainer>
        <SecureGrid>
          <div className="imageWrapper">
            <Image src={popSecure} />
          </div>

          {cards.map((card, i)=>(
            <SecureCard key={i}>
              <CardTitle>
                {card.title}
              </CardTitle>
              <CardText>
                {card.text}
              </CardText>
            </SecureCard>
          ))}

        </SecureGrid>
      </SecureContainer>
    </SecureSection>
  );
}