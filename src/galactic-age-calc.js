export class GalacticAge	{
	constructor(age)  {
		this.age = age;
		this.galacticAges = [];
	}
	
	solarAge(planetSolarYear)	{
		let planetAge = +((this.age*365)/planetSolarYear).toFixed(2);
		return planetAge;
	}
	
	calculateGalacticAges() {
		const planetSolarYears = [87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182];
		let galacticAge = this;
		planetSolarYears.forEach(function(planetSolarYear) {
		let planetSolarAge = galacticAge.solarAge(planetSolarYear);
		galacticAge.galacticAges.push(planetSolarAge);
	});
	return this.galacticAges;			
	}
};



