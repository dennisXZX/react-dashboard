/**
 * data shape of formatted athletes data set
 */
export interface AssociatedAthletes {
  /** athlete ID */
  key: string,
  /** athlete name */
  athlete: string,
  /** value indicates the Soreness level of athlete's muscle groups */
  muscleSoreness: number,
  /** value indicates how well the athlete rested */
  sleepQuality: number
}

