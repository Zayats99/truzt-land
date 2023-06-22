type A = { id: number; title: string; content: string };

export const accordionItems: A[] = [
  {
    id: 1,
    title: 'What is the maximum amount you insure?',
    content: 'We are currently insuring up to $50.000 per user per platform',
  },
  {
    id: 2,
    title: 'What coins do you cover?',
    content:
      'We cover all coins. Keep in mind that when buying insurance, the covered amount is the equivalent in USD of your crypto.',
  },
  {
    id: 3,
    title: 'What events are covered?',
    content:
      'Failure of platform due to hacks, market moves, de-peg events or bad management.',
  },
  {
    id: 4,
    title: 'How do you pay out claims?',
    content:
      'After we assess your claim, we transfer USDC or USDT into the wallet of your preference.',
  },
  {
    id: 5,
    title:
      'Can you insure assets in a platform different from the listed ones?',
    content: 'We can, send as an email at sales@truzt.io',
  },
];
