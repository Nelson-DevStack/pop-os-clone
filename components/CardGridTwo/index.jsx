import {
  FeatureSection,
  FeatureContainer,
  FeatureHeader,
  FeatureGrid,
  FeatureCard,
  Title,
  Text,
  FeatureBgCard,
  BgText,
  ColorTogglerBtn,
  FeatureText,
} from './CardGridTwo.style.js';

import Image from 'next/image';

export default function CardGridTwo({ title, text, cards, bigCards, toggler }) {
  return (
    <FeatureSection>
      <FeatureContainer>
        <FeatureHeader>
          {title}
        </FeatureHeader>

        <FeatureGrid>
          {cards.map((card, i)=>(
            <FeatureCard key={i}>
              <Title>{card.title}</Title>
              <Text>
                {card.text}
              </Text>
              <div className="imageWrapper">
                <Image src={card.image} />
              </div>
            </FeatureCard>
          ))}

          {bigCards.map((card, i)=>(
            <FeatureBgCard key={i}>
            <div>
              <Title>{card.title}</Title>
              <BgText>
                {card.text}
              </BgText>

              {card.themeToggler ? 
                <div className="btnWrapper">
                  <ColorTogglerBtn
                    onClick={toggler}
                  >
                  Change Theme
                  </ColorTogglerBtn>

                </div>
              : null
              }
              
            </div>
            <div className="imageWrapper">
              <Image src={card.image} />
            </div>
          </FeatureBgCard>
          ))}

        </FeatureGrid>
      </FeatureContainer>
    </FeatureSection >
  );
}
