import { KEYWORDS } from 'src/constants';

export const getRandomKeyword = (): string => {
  const randomIndex = Math.floor(Math.random() * KEYWORDS.length);
  return KEYWORDS[randomIndex];
};
