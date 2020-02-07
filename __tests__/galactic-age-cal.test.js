import { GalacticAge } from './../src/galactic-age-calc.js';

describe ( 'GalacticAge', () => {
	test('should create a GalacticAge object with an age property', () => {
		var galacticAge = new GalacticAge(31);
		expect(galacticAge.age).toEqual(31);
	});
}); 