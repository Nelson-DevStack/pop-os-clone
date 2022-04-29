import {
  SalesContainer,
  SalesFlex,
  SalesHeader,
  SalesSection,
  SalesTitle,
  SaleTitle,
  SalesContent,
  SaleText,
  LgLines,
  SalesCardsGrid,
  SaleCard
} from './SaleGrid.style';

import { Lines } from '../IconsGrid/IconsGrid.style.js';

import Image from 'next/image';

import popNotebook from '../../assets/pop-notebook.png';
import popDesktops from '../../assets/pop-desktop.png';
import popLaunch from '../../assets/pop-launch.png';
import popMeerkat from '../../assets/pop-meerkat.png';


export default function SaleGrid({ title, subtitle, texts }) {
  return (
    <SalesSection>
      <SalesContainer>

        <SalesHeader>
          <SalesTitle>
            {/* GET EVERY ADVANTAGE ON SYSTEM76 HARDWARe */}
            {title}
          </SalesTitle>
          <div>
            <Lines />
            <Lines />
            <Lines />
          </div>
        </SalesHeader>

        <SalesFlex>
          <SalesContent>
            <SaleTitle>
              {subtitle}
            </SaleTitle>

            {texts.map((text, i)=>(
              <SaleText key={i}>
                {text}
              </SaleText>
            ))}

          </SalesContent>

          <SalesCardsGrid>
            <SaleCard>
              <div className='imageWrapper'>
                <Image src={popNotebook} />
              </div>

            </SaleCard>
            <SaleCard>
              <div className="imageWrapper">
                <Image src={popDesktops} />
              </div>
            </SaleCard>
            <SaleCard>
              <div className="imageWrapper">
                <Image src={popLaunch} />
              </div>
            </SaleCard>
            <SaleCard>
              <div className="imageWrapper">
                <Image src={popMeerkat} />
              </div>
            </SaleCard>
          </SalesCardsGrid>

        </SalesFlex>

        <div>
          <LgLines />
        </div>

      </SalesContainer>
    </SalesSection>
  );
}
