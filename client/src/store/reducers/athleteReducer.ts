import { AthleteState } from '../../interfaces/IAppStates';
import { LOAD_ATHLETE_DATA_FAIL, LOAD_ATHLETE_DATA_START, LOAD_ATHLETE_DATA_SUCCESS } from '../actions/athleteActions';
import { FormattedAthlete } from '../../interfaces/IAthletes';

const initialState = {
	athletes: [],
	isFetching: false,
	errorMessage: ''
};

interface IStartAction {
	type: typeof LOAD_ATHLETE_DATA_START;
}

interface ISuccessAction {
	type: typeof LOAD_ATHLETE_DATA_SUCCESS;
	data: Array<FormattedAthlete>;
}

interface IFailAction {
	type: typeof LOAD_ATHLETE_DATA_FAIL;
	payload: {
		error: string;
	};
}

export type AthleteAction = IStartAction | ISuccessAction | IFailAction;

const athleteReducer = (state: AthleteState = initialState, action: AthleteAction): AthleteState => {
	switch (action.type) {
		case LOAD_ATHLETE_DATA_START:
			return {
				...state,
				isFetching: true
			};

		case LOAD_ATHLETE_DATA_SUCCESS:
			return {
				...state,
				athletes: action.data,
				isFetching: false
			};

		case LOAD_ATHLETE_DATA_FAIL:
			return {
				...state,
				errorMessage: action.payload.error,
				isFetching: false
			};

		default:
			return state;
	}
};

export default athleteReducer;
