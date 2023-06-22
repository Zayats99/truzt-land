import { AnimatePresence } from 'framer-motion';
import type { FC } from 'react';

import * as S from './Accordion.styles';

export interface AccordionProps {
  className?: string;
  i: number;
  expanded: number | boolean;
  onToggle: (res: number | boolean) => void;
  content: React.ReactNode;
  title: string;
}

export const Accordion: FC<AccordionProps> = ({
  i,
  expanded,
  onToggle,
  content,
  title,
}) => {
  const isOpen = i === expanded;
  return (
    <S.Accordion>
      <S.Header initial={false} onClick={() => onToggle(isOpen ? false : i)}>
        <S.Title color="mainBlack">{title}</S.Title>
        <S.Plus>{isOpen ? '-' : '+'}</S.Plus>
      </S.Header>
      <S.Body>
        <AnimatePresence initial={false}>
          {isOpen && (
            <S.Body
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <S.TypographyStyled color="mainBlack">
                {content}
              </S.TypographyStyled>
            </S.Body>
          )}
        </AnimatePresence>
      </S.Body>
    </S.Accordion>
  );
};
