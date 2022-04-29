import {
  EndSection,
  EndContainer,
  EndContent,
  EndText,
  LinkBtn,
  EndLinks,
  EndLink,
} from './End.style.js';

export default function End({ text, buttons, links }) {
  return (
    <EndSection>
      <EndContainer>
        <EndContent>
          <EndText>
            {text}
          </EndText>

          <div className="btnWrapper">
            {buttons.map((btn, i)=>(
              <LinkBtn btnBg={btn.bgColor} key={i}>
                {btn.label}
              </LinkBtn>
            ))}
          </div>

        </EndContent>

        <EndLinks>
          {links.map((link, i)=>(
            <EndLink href={link.href} key={i}>
              <link.icon />
              {link.label}
            </EndLink>
          ))}
        </EndLinks>

      </EndContainer>
    </EndSection>
  );
}