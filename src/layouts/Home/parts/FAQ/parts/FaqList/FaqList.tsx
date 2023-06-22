import type { FC } from 'react';
import { useState } from 'react';

import { Accordion } from '@/components';

import { accordionItems } from './data';

export interface FaqListProps {}

export const FaqList: FC<FaqListProps> = () => {
  const [expanded, setExpanded] = useState<boolean | number>(0);

  const handleToggle = (res: boolean | number) => {
    setExpanded(res);
  };

  return (
    <>
      {accordionItems.map(({ id, content, title }) => (
        <Accordion
          key={id}
          i={id}
          content={content}
          expanded={expanded}
          title={title}
          onToggle={handleToggle}
        />
      ))}
    </>
  );
};
