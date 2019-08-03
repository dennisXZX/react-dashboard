import { FormattedAthlete } from './IAthletes';

export interface IViewState {
	activeView: string;
}

export interface IAthleteState {
	athletes: Array<FormattedAthlete>;
}