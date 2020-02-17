export class GalacticAge	{
	constructor(age)  {
		this.age = age;
		this.galacticAges = [];
		this.yearsRemainingPlanets = [];
		this.planetConversionFactors = [87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182]; //values of planet solar year standardized to earth days. e.g. one mercury year is equal to 87.6 earth days.
	}
	
	//converts earth years to relative planet years
	solarYearConverter(planetConversionFactor, earthYear)	{
		let planetYear = +((earthYear*365)/planetConversionFactor).toFixed(2);
		return planetYear;
	}
	
	//calculates all relative planet ages given an earth age. returns an array of planet ages.
	calculateGalacticAges() {
		this.planetConversionFactors.forEach((planetConversionFactor) => {
			let planetAge = this.solarYearConverter(planetConversionFactor, this.age);
			this.galacticAges.push(planetAge);
			});
	return this.galacticAges;			
	}

	//calculates relative years left to live on each planet given an age and life expectancy (both given in earth years)
	calculateGalacticLifeExpectancy(lifeExpectancy) {
		let yearsToLive = lifeExpectancy - this.age;
		this.planetConversionFactors.forEach((planetConversionFactor) => {
			let yearsRemainingPlanet = this.solarYearConverter(planetConversionFactor, yearsToLive);
			if (yearsRemainingPlanet < 0) {
				(yearsRemainingPlanet)*=(-1);
			}
			this.yearsRemainingPlanets.push(yearsRemainingPlanet);
		});
		return this.yearsRemainingPlanets;
	}
};
