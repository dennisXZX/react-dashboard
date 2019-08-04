import { AthleteDataset, FormattedAthlete } from '../interfaces/IAthletes';

/**
 * @description
 * Generate a random key
 */
export const generateRandomKey = () =>
	Math.random()
		.toString(36)
		.substring(2, 10);

/**
 * @description
 * Format athlete data
 *
 * @param athleteData - original data set
 */
export const formatAthleteDataset = (athleteData: AthleteDataset) => {
	const associatesAthletes: FormattedAthlete[] = [];

	for (let i = 0; i < athleteData.athlete.length; i++) {
		associatesAthletes.push({
			athlete: athleteData.athlete[i],
			key: generateRandomKey(),
			muscleSoreness: Number(athleteData.muscleSoreness[i]),
			sleepQuality: Number(athleteData.sleepQuality[i])
		});
	}

	return associatesAthletes;
};
