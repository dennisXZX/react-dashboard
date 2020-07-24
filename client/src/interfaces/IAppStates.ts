import { FormattedAthlete } from './IAthletes';

export interface IViewState {
	activeView: string;
}

export interface IAthleteState {
	athletes: Array<FormattedAthlete>;
	isFetching: boolean;
	errorMessage: string;
}

export interface IAppState {
	view: IViewState;
	athlete: IAthleteState;
}