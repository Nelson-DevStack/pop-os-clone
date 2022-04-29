import {
  CardText,
  CardTitle,
  CardTextList,
  ListItem,
  BigCardsGrid,
  BigCard,
  MiniCard,
  MiniCardsGrid,
  PresentationContainer,
  PresentationStyle,
  PresHeader,
  PresText,
  PresTitle
} from "./CardGridOne.style.js"; 

export default function CardGridOne({ title, text, bigCards, cards }) {
  return (
    <PresentationStyle>
      <PresentationContainer>

        <PresHeader>
          <PresTitle>
            {title}
          </PresTitle>

          <PresText>
            {text}
          </PresText>
        </PresHeader>

        <BigCardsGrid>
          {bigCards.map((card, i) =>(
            <BigCard key={i}>
              <CardTitle>
                {card.title}
              </CardTitle>
              <CardText>
                {card.text}
              </CardText>
              <div className="iframeWrapperBigCard">
                <iframe width="560" height="315" src={card.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>  
              </div>
            </BigCard>
          ))}
        </BigCardsGrid>

        <MiniCardsGrid>
          {cards.map((card, i)=>(
            <MiniCard key={i}>
              <CardTitle txtAlign={"center"}>{card.title}</CardTitle>
              <CardText>
                {card.text}

                {card.list ?
                  <CardTextList >
                    {card.list.map((cardlist, i)=>(
                      <ListItem key={i}>
                        {cardlist}
                      </ListItem>
                    ))}
                  </CardTextList>
                : null
                }
              </CardText>
              <div className="iframeWrapper">
                <iframe src={card.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </MiniCard>
          ))}
        </MiniCardsGrid>

      </PresentationContainer>
    </PresentationStyle>
  );
}
