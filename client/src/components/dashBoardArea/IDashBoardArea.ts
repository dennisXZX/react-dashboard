import { FormattedAthlete } from '../../interfaces/IAthletes';

export interface DashBoardAreaProps {
	activeView: string;
	athletes: Array<FormattedAthlete>;
	loadAthleteData: () => void;
}
