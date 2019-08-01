import axios from 'axios';
import { associateStaticsToAthlete } from '../../utils/dataFormatter';

/** action types */

export const LOAD_ATHLETE_DATA_START = 'LOAD_ATHLETE_DATA_START';
export const LOAD_ATHLETE_DATA_SUCCESS = 'LOAD_ATHLETE_DATA_SUCCESS';
export const LOAD_ATHLETE_DATA_FAIL = 'LOAD_ATHLETE_DATA_FAIL';

/** action creators */

const loadAthleteDataStart = () => ({
	type: LOAD_ATHLETE_DATA_START
});

const loadAthleteDataFail = (error: any) => ({
	type: LOAD_ATHLETE_DATA_FAIL,
	error
});

const loadAthleteDataSuccess = (data: any) => ({
	type: LOAD_ATHLETE_DATA_SUCCESS,
	data
});

export const loadAthleteData = () => (dispatch: any) => {
	dispatch(loadAthleteDataStart());

	axios
		.get('/api/athletes')
		.then(({ data }) => {
			const formattedAthletesData = associateStaticsToAthlete(data);

			dispatch(loadAthleteDataSuccess(formattedAthletesData));
		})
		.catch(err => {
			dispatch(loadAthleteDataFail(err));
		});
};
