import type { Variants } from 'framer-motion';
import type { FC } from 'react';

import * as S from './ReasonForIncurance.styles';

export interface ReasonForIncuranceProps {
  className?: string;
}

const ImagesData = ['ftxLogo', 'celsiumLogo', 'blockfiLogo', 'vauldLogo'];

export const ReasonForIncurance: FC<ReasonForIncuranceProps> = ({
  className,
}) => {
  const variantsLeft: Variants = {
    offscreen: {
      x: -60,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const variantsRight: Variants = {
    offscreen: {
      x: 60,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <S.Root
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
    >
      <S.Wrapper>
        <S.Box>
          {ImagesData.map((el, idx) => (
            <S.CompanyItems
              key={idx}
              variants={idx > 2 ? variantsLeft : variantsRight}
            >
              <img
                src={`/assets/svg/${el}.svg`}
                alt={`Logotypes ${el}`}
                width="340px"
                height="150px"
              />
            </S.CompanyItems>
          ))}
        </S.Box>

        <S.Box>
          <S.TextBox variants={variantsLeft}>
            <S.IconUp
              src="/assets/svg/insurance-block-up.svg"
              alt="Picture up cirle"
            />
            <S.IconDown
              src="/assets/svg/insurence-block-down.svg"
              alt="Picture down"
            />
            <S.TextTypography>
              If your centralized crypto platform fails, your money is gone.
            </S.TextTypography>
          </S.TextBox>
          <S.TextBox variants={variantsRight}>
            <S.IconUp
              src="/assets/svg/insurance-block-up.svg"
              alt="Picture up cirle"
            />
            <S.IconDown
              src="/assets/svg/insurence-block-down.svg"
              alt="Picture down"
            />
            <S.TextTypography>
              <S.Innertext>$17.6bn</S.Innertext> were lost by users across FTX,
              Celsius, Vauld and BlockFi.
            </S.TextTypography>
          </S.TextBox>
        </S.Box>
      </S.Wrapper>
      {/* <S.LeftSideImg>
        <Image
          fill
          alt="Spaceship"
          src="/assets/images/space-ship.png"
          priority
        />
      </S.LeftSideImg>
      <S.RightSideImg>
        <Image
          fill
          alt="Earth picturee"
          src="/assets/images/earth.png"
          priority
        />
      </S.RightSideImg> */}
    </S.Root>
  );
};
