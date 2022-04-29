import {
  ListContainer,
  ListSect,
  ListHeader,
  ListTitle,
  ListText,
  ListCardGrid,
  ListCard,
  ListCardTitle,
  ListCardContent,
  ListUl,
  ListCardText,
} from './CardsList.style';

export default function CardsList({ title, text, cards }){
  return(
    <ListSect>
      <ListContainer>
        <ListHeader>
          <ListTitle>{title}</ListTitle>
          <ListText>{text}</ListText>
        </ListHeader>

        <ListCardGrid>
          {cards.map((card, i)=>(
            <ListCard key={i}>
              <ListCardContent>
                <ListCardTitle>{card.title}</ListCardTitle>
                <ListCardText>
                  {card.text}
                </ListCardText>
              </ListCardContent>
              <ListUl>
                {card.list.map((cardList, i)=>(
                  <li key={i}>{cardList}</li>
                ))}
              </ListUl>
          </ListCard>
          ))}
        </ListCardGrid>

      </ListContainer>
    </ListSect>
  )
}