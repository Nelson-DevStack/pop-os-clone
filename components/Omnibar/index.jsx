import {
  OmniBarContainer,
  OmniBar,
  OmniBarButton,
  OmniBarTextLink
} from "./Omnibar.style";

export default function Omnibar({ text, href, buttonOne, buttonTwo }){
  return(
    <OmniBar>
      <OmniBarContainer>

        {buttonOne ? 
        <OmniBarButton>
          Specials
        </OmniBarButton>
        : null
        }
        
        <OmniBarTextLink href={href}>
          {text}
        </OmniBarTextLink>

        {buttonTwo ?
          <OmniBarButton>
            Download
          </OmniBarButton>
        : null
        }

      </OmniBarContainer>
    </OmniBar>
  );
}
