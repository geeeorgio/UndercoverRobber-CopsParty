import { LOCATIONS } from 'src/constants';

export const getRandomLocation = (): string => {
  const randomIndex = Math.floor(Math.random() * LOCATIONS.length);
  return LOCATIONS[randomIndex];
};
