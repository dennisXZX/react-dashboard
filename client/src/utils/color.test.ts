import { generateChartColors } from './color';

describe('Utils - color', () => {
	describe('generateChartColors', () => {
		it('should generate correct amount of colors', () => {
			const dataset = [1, 2, 3];
			const expectedColorAmount = 3;

			const generatedColorArray = generateChartColors(dataset);
			expect(generatedColorArray.length).toEqual(expectedColorAmount);
		});
	});
});
