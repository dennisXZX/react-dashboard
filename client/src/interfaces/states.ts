import { FormattedAthlete } from './athletes';

export interface IViewState {
	activeView: string;
}

export interface IAthleteState {
	athletes: Array<FormattedAthlete>;
}
