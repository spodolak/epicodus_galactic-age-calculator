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
		expect(galacticAge.solarAgeConverter(87.6)).toEqual(129.17);
	});

	test('should run the users solar age converter for each planet and returns an array of planet ages', () =>	{
		expect(galacticAge.calculateGalacticAges()).toEqual([129.17, 50.39, 31, 16.48, 2.61, 1.05, 0.37, 0.19]);
	});

	test('should calculate and convert years left to live on each planet based on inputted age and 100 earth-year life expectancy', () => {
		expect(galacticAge.calculateGalacticLifeExpectancy()).toEqual([287.5, 112.16, 69, 36.68, 5.87, 2.34, 0.82, 0.41]);
	});
}); 

