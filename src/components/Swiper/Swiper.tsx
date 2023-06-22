import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import * as S from './Swiper.styles';

const sliderItems = [
  'Binance_BinanceUS ',
  'BitBank',
  'Bitstamp',
  'Bittrex',
  'Coinbase',
  'Gemini',
  'Huobi',
  'itBit',
  'Kraken',
];

export const SliderSwiper = () => {
  return (
    <S.Root>
      <Marquee speed={100}>
        {sliderItems.map((item) => (
          <S.Preview key={item}>
            <S.SwiperImage>
              <Image
                fill
                alt={`Logo ${item}`}
                src={`/assets/svg/${item}.svg`}
              />
            </S.SwiperImage>
          </S.Preview>
        ))}
      </Marquee>
    </S.Root>
  );
};
