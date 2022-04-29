import {
  ToolsSection,
  ToolsContainer,
  ToolsHeader,
  Title,
  Lines,
  ToolsFlex,
  Text,
  IconGrid,
  IconLink,
} from './IconsGrid.style.js';

import Image from 'next/image';

export default function IconsGrid({ title, text, linkItems }) {
  return (
    <ToolsSection>
      <ToolsContainer>
        <ToolsHeader>
          <Title>
            {title}
          </Title>
          <div>
            <Lines />
            <Lines />
            <Lines />
          </div>
        </ToolsHeader>
        <ToolsFlex>
          <Text>
            {text}
          </Text>
          <IconGrid>
            {linkItems.map((link, index) => (
              <IconLink href={link.link} key={index}>
                <div className="imageWrapper">
                  <Image src={link.icon} />
                </div>
              </IconLink>
            ))}

          </IconGrid>

        </ToolsFlex>

        <div>
          <Lines />
          <Lines />
          <Lines />
        </div>
      </ToolsContainer>
    </ToolsSection>
  );
}