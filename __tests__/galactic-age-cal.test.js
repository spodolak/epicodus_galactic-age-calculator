import { GalacticAge } from './../src/galactic-age-calc.js';

describe ( 'GalacticAge', () => {

	// beforeEach(()=> {
	// 	let galacticAge = new GalacticAge(31);
	// });

	test('should create a GalacticAge object with an age property', () => {
		let galacticAge = new GalacticAge(31);
		expect(galacticAge.age).toEqual(31);
	});


	test('should develop method to calculate user solar age given days in planet solar year', () => {
		let galacticAge = new GalacticAge(31);
		expect(galacticAge.solarAge()).toEqual(128.57);
	});

}); 