import { 
  IntroButton,
  IntroButtonsArea,
  IntroContainer,
  IntroContent,
  IntroImageArea,
  IntroStyle,
  IntroText,
  IntroTitle
} from "./Hero.style";
import popLogo from '../../assets/pop-logo.png';
import Image from "next/image";

export default function Hero({title, text}){
  return(
    <IntroStyle>
      <IntroContainer>
        <IntroContent>
          <IntroTitle>{title}</IntroTitle>
          <IntroText>
            {text}
          </IntroText>

          <IntroButtonsArea>
            <IntroButton bgcolor={"#6acad8"}>
              Download
            </IntroButton>

            <IntroButton bgcolor={"#ffa300"}>
              Support Pop
            </IntroButton>
          </IntroButtonsArea>

        </IntroContent>

        <IntroImageArea>
          <div className="imageWrapper">
            <Image src={popLogo} />
          </div>
        </IntroImageArea>
      </IntroContainer>
    </IntroStyle>
  );
}