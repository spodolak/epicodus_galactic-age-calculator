import { GalacticAge } from './../src/galactic-age-calc.js';

describe ( 'GalacticAge', () => {
	
	let galacticAge;

	beforeEach(()=> {
		galacticAge = new GalacticAge(31);
	});

	test('should create a GalacticAge object with an age property', () => {
		expect(galacticAge.age).toEqual(31);
	});


	test('should develop method to calculate user solar age given days in planet solar year', () => {
		// let galacticAge = new GalacticAge(31);
		expect(galacticAge.solarAge(87.6)).toEqual(129.17);
	});

	// test('should add an array to solarAge method that includes each planets solar years', () =>	{
	// 	let galacticAge = new GalacticAge(31);
	// 	expect(galacticAge.solarAge).toEqual([87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182])
	// });
}); 