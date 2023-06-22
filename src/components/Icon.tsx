import type { FC } from 'react';
import styled from 'styled-components';

const PREFIX = 'icon-';

const paintViaStroke = (name: string) => {
  switch (name) {
    // case 'arrow-down':
    case 'expand':
    case 'grid-md':
    case 'grid-xs':
    case 'search':
      return true;
    case 'check':
    case 'soc-discord':
    case 'soc-medium':
    case 'soc-twitter':
    default:
      return false;
  }
};

export interface SvgProps {
  name: string;
  className?: string;
}

const Svg = styled.svg.attrs<SvgProps>((props) => {
  const viaStroke = paintViaStroke(props.name);

  return {
    fill: viaStroke ? 'none' : 'currentColor',
    stroke: viaStroke ? 'currentColor' : 'none',
  };
})<SvgProps>`
  width: 1em;
  height: 1em;
  fill: ${(props) => props.fill};
  stroke: ${(props) => props.stroke};
`;

export const Icon: FC<SvgProps> = ({ name, className }) => (
  <Svg name={name} className={className}>
    <use xlinkHref={`#${PREFIX}${name}`} />
  </Svg>
);
