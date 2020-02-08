export class GalacticAge	{
	constructor(age)  {
		this.age = age;
		this.galacticAges = [];
		this.yearsRemainingPlanets = [];
	}
	
	solarYearConverter(planetSolarYear, year)	{
		let planetYear = +((year*365)/planetSolarYear).toFixed(2);
		return planetYear;
	}
	
	calculateGalacticAges() {
		const planetSolarYears = [87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182]; //values of planet year standardized to earth days
		let galacticAge = this;
		planetSolarYears.forEach(function(planetSolarYear) {
		let planetSolarAge = galacticAge.solarYearConverter(planetSolarYear, galacticAge.age);
		galacticAge.galacticAges.push(planetSolarAge);
	});
	return this.galacticAges;			
	}

	calculateGalacticLifeExpectancy(lifeExpectancy) {
		let yearsToLive = lifeExpectancy - this.age;
		const planetSolarYears = [87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182]; //values of planet year standardized to earth days
		let galacticAge = this;
		planetSolarYears.forEach(function(planetSolarYear) {
			let yearsRemainingPlanet = galacticAge.solarYearConverter(planetSolarYear, yearsToLive);
		galacticAge.yearsRemainingPlanets.push(yearsRemainingPlanet);
		});
		return this.yearsRemainingPlanets;
	}
};