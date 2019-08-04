import { formatAthleteDataset, generateRandomKey } from './dataFormatter';

describe('Utils - dataFormatter', () => {
	describe('generateRandomKey', () => {
		it('should generate generate a random key', () => {
			const generatedKeyLength = generateRandomKey().length;
			const expectedKeyLength = 8;

			expect(generatedKeyLength).toEqual(expectedKeyLength);
		});
	});

	describe('formatAthleteDataset', () => {
		it('should format the athlete data correct', () => {
			const dataSet = {
				athlete: ['Jamie Anderson'],
				muscleSoreness: ['5'],
				sleepQuality: ['5']
			};

			const formattedDataset = formatAthleteDataset(dataSet);

			const expectedFormattedDataset = [
				{
					key: formattedDataset[0].key,
					athlete: 'Jamie Anderson',
					muscleSoreness: 5,
					sleepQuality: 5
				}
			];

			expect(formattedDataset).toEqual(expectedFormattedDataset);
		});
	});
});
