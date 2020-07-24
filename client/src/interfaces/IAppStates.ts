import { FormattedAthlete } from './IAthletes';

export interface ViewState {
	activeView: string;
}

export interface AthleteState {
	athletes: Array<FormattedAthlete>;
	isFetching: boolean;
	errorMessage: string;
}

export interface AppState {
	view: ViewState;
	athlete: AthleteState;
}
