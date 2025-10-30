import { ROBBERS } from 'src/constants';

type RobberId = keyof typeof ROBBERS;

interface SuspectDetails {
  characterId: RobberId;
  description: { trait: string; personality: string };
}

export const getRandomSuspect = (): SuspectDetails => {
  const robberKeys = Object.keys(ROBBERS) as RobberId[];

  const randomIndex = Math.floor(Math.random() * robberKeys.length);
  const selectedId = robberKeys[randomIndex];

  const suspect = ROBBERS[selectedId];

  const fullDescription = {
    trait: suspect.trait,
    personality: suspect.personality,
  };

  return {
    characterId: selectedId,
    description: fullDescription,
  };
};
