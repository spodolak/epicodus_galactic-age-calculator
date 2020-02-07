export class GalacticAge	{
	constructor(age)  {
		this.age = age;
		this.planetSolarYears = [87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182];
		this.galacticAges = [];
	}
	
	solarAge(planetSolarYear)	{
		let planetAge = +((this.age*365)/planetSolarYear).toFixed(2);
		return planetAge;
	}
	
	calculateGalacticAges() {
		this.planetSolarYears.forEach(function(planetSolarYear) {
		let planetSolarAge = solarAge(planetSolarYear);
		this.galacticAges.push(planetSolarAge);
		return this.galacticAges;			
		});
	}
};




