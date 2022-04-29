import styled from 'styled-components';

export const FeatureSection = styled.section`
  width: 100%;
  padding: 2em 1rem;
`

export const FeatureContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  color: ${props => props.theme.cardColor};
`

export const FeatureHeader = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  font-family: Fira Sans, sans-serif;
  letter-spacing: .15em;
  font-size: 2.1rem;
  text-align: center;
`

export const FeatureText = styled.p`
  font-size: 1.3rem;
  width: 90%;
  text-align: left;

  @media (max-width: 768px){
    width: 100%;
    font-size: 1.2rem;
  }
`

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  margin: 2em 0;

  .imageWrapper{
    margin: auto;
  }

  @media (max-width: 1280px){
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 970px){
    grid-template-columns: 1fr;
  }
`

export const FeatureCard = styled.div`
  border: 1px solid ${props => props.theme.cardBorder};
  background: ${props => props.theme.cardBg};
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

export const FeatureBgCard = styled.div`
  border: 1px solid ${props => props.theme.cardBorder};
  background: ${props => props.theme.cardBg};
  border-radius: 12px;
  padding: 2rem;
  grid-column: span 3;
  display: flex;
  flex-direction: row;

  & div{
    width: 50%;
  }

  @media (max-width: 1280px){
    grid-column: auto;
    flex-direction: column;

    div{
      width: auto;
    }

    & .btnWrapper{
      width: 100%;
      margin: 30px 0;
    }
  }
`

export const Title = styled.h2`
  font-family: Roboto slab, serif;
  font-weight: 400;
  font-size: 1.8rem;
`

export const Text = styled.p`
  margin: 15px 0 30px 0;
  font-size: 1.3rem;
  height: 100%;
`

export const BgText = styled.p`
  margin: 15px 0 30px 0;
  font-size: 1.3rem;
`

export const ColorTogglerBtn = styled.button`
  padding: .9em;
  text-transform: uppercase;
  font-size: 1em;
  text-align: center;
  border: none;
  border-radius: .25em;
  background-color: ${props => props.theme.btnColorToggler};
  color: #f2f2f2;
  font-weight: 500;
  letter-spacing: .2px;
  transition: 300ms;
  transition-property: transform background-color;
  cursor: pointer;

  &:hover{
    transform: scale(1.03);
  }
`