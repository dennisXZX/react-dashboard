/**
 * @description
 * Generate a array of random color string
 *
 * @param dataset - dataset associated with the generated colors
 */
export const generatePieChartColors = (dataset: Array<number>) => {
	const colors = dataset.map(_ => {
		const r = Math.floor(Math.random() * 200);
		const g = Math.floor(Math.random() * 200);
		const b = Math.floor(Math.random() * 200);

		return `rgb(${r},${g},${b})`;
	});

	return colors;
};
