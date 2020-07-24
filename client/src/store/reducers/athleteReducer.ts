import { IAthleteState } from '../../interfaces/IAppStates';
import { LOAD_ATHLETE_DATA_FAIL, LOAD_ATHLETE_DATA_START, LOAD_ATHLETE_DATA_SUCCESS } from '../actions/athleteActions';

const initialState = {
	athletes: [],
	isFetching: false,
	errorMessage: ''
};

const athleteReducer = (state: IAthleteState = initialState, action: any): IAthleteState => {
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
				errorMessage: action.payload,
				isFetching: false
			};

		default:
			return state;
	}
};

export default athleteReducer;
