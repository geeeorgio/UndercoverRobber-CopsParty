import type { ITEMS } from 'src/constants';
import type { Player } from 'src/redux/slices/players/slice';

export const assignCharacter = (
  player: Player,
  role: 'cop' | 'robber',
): keyof typeof ITEMS => {
  if (role === 'cop') {
    return player.gender === 'female' ? 'CopFemale' : 'CopMale';
  }

  const robberOptions: (keyof typeof ITEMS)[] = [
    'Rob1Female',
    'Rob2Male',
    'Rob3Key',
    'Rob4GreenHat',
    'Rob5FemaleKey',
    'Rob6FemaleGlasses',
    'Rob7FemaleBlack',
  ];

  const availableRobbers = robberOptions.filter((key) => {
    const keyLower = key.toLowerCase();

    if (player.gender === 'random') return true;

    if (player.gender === 'male' && keyLower.includes('male')) return true;

    if (player.gender === 'female' && keyLower.includes('female')) return true;

    return false;
  });

  if (availableRobbers.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableRobbers.length);
    return availableRobbers[randomIndex];
  }

  return 'Sketch';
};
