/**
 * data shape of formatted athletes data set
 */
export interface AssociatedAthletes {
	/** unique key for the athlete */
	key: string;

	/** name of athlete */
	athlete: string;

	/** the soreness level of athlete's muscle groups */
	muscleSoreness: number;

	/** athlete's sleep quality */
	sleepQuality: number;
}
