import { AssociatedAthletes } from '../interfaces/athletes';

/**
 * Generate a random key.
 */
const generateRandomKey = () =>
	Math.random()
		.toString(36)
		.substring(2, 15);

/**
 * assign ID, muscleSoreness value and sleepQuality to each athlete
 * @param athleteData original data set.
 */
export const associateStaticsToAthlete = (athleteData: any) => {
	const associatesAthletes: AssociatedAthletes[] = [];

	for (let i = 0; i < athleteData.athlete.length; i++) {
		associatesAthletes.push({
			key: generateRandomKey(),
			muscleSoreness: Number(athleteData.muscleSoreness[i]),
			athlete: athleteData.athlete[i],
			sleepQuality: Number(athleteData.sleepQuality[i])
		});
	}

	return associatesAthletes;
};
