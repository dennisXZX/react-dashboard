/**
 * data shape of un-formatted athletes data set
 */
export interface AthleteDataset {
	athlete: Array<string>;
	muscleSoreness: Array<string>;
	sleepQuality: Array<string>;
}

/**
 * data shape of formatted athletes data set
 */
export interface FormattedAthlete {
	/** unique key for the athlete */
	key: string;

	/** name of athlete */
	athlete: string;

	/** the soreness level of athlete's muscle groups */
	muscleSoreness: number;

	/** athlete's sleep quality */
	sleepQuality: number;
}
