const dummyApiResponse = {
	showLightAndDarkMode: false,
	showTicTacToeBoard: true,
	showRandomColorGenerator: true,
	showAccordian: false,
	showTreeView: true,
};

export default function featureFlagsDataServiceCall(): Promise<
	Record<string, boolean>
> {
	return new Promise((resolve, reject) => {
		if (dummyApiResponse) {
			setTimeout(() => resolve(dummyApiResponse), 500);
		} else {
			reject("Some error occured, please try again!");
		}
	});
}
