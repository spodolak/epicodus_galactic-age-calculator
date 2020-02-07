import { GalacticAge } from './../src/galactic-age-calc.js';

describe ( 'GalacticAge', () => {
	
	let galacticAge;

	beforeEach(()=> {
		galacticAge = new GalacticAge(31);
	});

	test('should create a GalacticAge object with an age property', () => {
		expect(galacticAge.age).toEqual(31);
	});
	
	test('should calculate user solar age when passed a unique planets solar year', () => {
		expect(galacticAge.solarAge(87.6)).toEqual(129.17);
	});

	test('should run the users solar age calculation for each planet. returns an array of planet ages', () =>	{
		expect(galacticAge.calculateGalacticAges()).toEqual([129.17, 50.39, 31, 16.48, 2.61, 1.05, 0.37, 0.19]);
	});

}); 

