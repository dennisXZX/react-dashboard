import { FormattedAthlete } from '../../../interfaces/IAthletes';

export const columns = [
	{
		title: 'Athlete',
		dataIndex: 'athlete',
		key: 'athlete',
		sorter: (a: FormattedAthlete, b: FormattedAthlete) => a.athlete.localeCompare(b.athlete)
	},
	{
		title: 'Muscle Soreness',
		dataIndex: 'muscleSoreness',
		key: 'muscleSoreness',
		sorter: (a: FormattedAthlete, b: FormattedAthlete) => a.muscleSoreness - b.muscleSoreness
	},
	{
		title: 'Sleep Quality',
		dataIndex: 'sleepQuality',
		key: 'sleepQuality',
		sorter: (a: FormattedAthlete, b: FormattedAthlete) => a.sleepQuality - b.sleepQuality
	}
];

export const footerGenerator: any = (data: Array<FormattedAthlete>) => {
	const sumSoreness = data
		.map((athleteData: FormattedAthlete) => athleteData.muscleSoreness)
		.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);

	const averageSoreness = sumSoreness / data.length;

	const summaryText = `Average Muscle Soreness: ${averageSoreness}`;

	return summaryText;
};
