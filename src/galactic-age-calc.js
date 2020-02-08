export class GalacticAge	{
	constructor(age)  {
		this.age = age;
		this.galacticAges = [];
	}
	
	solarAgeConverter(planetSolarYear)	{
		let planetAge = +((this.age*365)/planetSolarYear).toFixed(2);
		return planetAge;
	}
	
	calculateGalacticAges() {
		const planetSolarYears = [87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182]; //values of planet year standardized to earth days
		let galacticAge = this;
		planetSolarYears.forEach(function(planetSolarYear) {
		let planetSolarAge = galacticAge.solarAgeConverter(planetSolarYear);
		galacticAge.galacticAges.push(planetSolarAge);
	});
	return this.galacticAges;			
	}
};



