import {
  RaspSection,
  RaspContainer,
  RaspContent,
  RaspTitle,
  RaspSubtitle,
  RaspText,
  RaspBtn,
} from './ImagePresentation.style.js';

import Image from 'next/image';

export default function ImagePresentation({ title, subtitle, text, image, btn }){
  return (
    <RaspSection>
      <RaspContainer>
        <div className="imageWrapper">
          <Image src={image} />
        </div>
        <RaspContent>
          <RaspTitle>
            {title}
          </RaspTitle>
          <RaspSubtitle>
            {subtitle}
          </RaspSubtitle>
          <RaspText>
            {text}
          </RaspText>

          {btn ? 
            <RaspBtn>
              Download
            </RaspBtn>
          : null
          }
          

        </RaspContent>
      </RaspContainer>
    </RaspSection>
  )
}
