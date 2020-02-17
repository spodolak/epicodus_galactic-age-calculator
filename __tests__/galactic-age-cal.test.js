import { GalacticAge } from './../src/galactic-age-calc.js';

describe ( 'GalacticAge', () => {
	
	let galacticAge;

	beforeEach(()=> {
		galacticAge = new GalacticAge(31);
	});

	test('should create a GalacticAge object with an age property and an array of planet solar year conversion factors', () => {
		expect(galacticAge.age).toEqual(31);
		expect(galacticAge.planetConversionFactors).toEqual([87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182]);
	});
	
	test('should calculate relative solar years of a given planet when passed that planets conversion factor and a number in earth years', () => {
		expect(galacticAge.solarYearConverter(87.6, 31)).toEqual(129.17);
	});

	test('should calculate relative planet ages given an inputted age. returns an array of planet ages', () =>	{
		expect(galacticAge.calculateGalacticAges()).toEqual([129.17, 50.39, 31, 16.48, 2.61, 1.05, 0.37, 0.19]);
	});

	test('should calculate relative number of years left to live on each planet based on inputted age and inputted life expectancy', () => {
		expect(galacticAge.calculateGalacticLifeExpectancy(100)).toEqual([287.5, 112.16, 69, 36.68, 5.82, 2.34, 0.82, 0.42]);
	});

	test('should return number of years past life expectancy for each planet given user age over 100 earth years old', () => {
		galacticAge.age = 101;
		expect(galacticAge.calculateGalacticLifeExpectancy(100)).toEqual([4.17, 1.63, 1, 0.53, 0.08, 0.03, 0.01, 0.01]);

	});
}); 

