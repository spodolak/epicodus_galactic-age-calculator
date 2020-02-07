export class GalacticAge	{
	constructor(age)  {
		this.age = age;
	}
	
	solarAge(planetSolarYear)	{
		let planetAge = +((this.age*365)/planetSolarYear).toFixed(2);
		return planetAge;
	}
	
	calculateGalacticAges() {
		const planetSolarYears = [87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182];
		this.galacticAges = [];
		planetSolarYears.forEach(function(planetSolarYear) {
			let planetSolarAge = solarAge(planetSolarYear);
			this.galacticAges.push(planetSolarAge);
			return this.galacticAges;			
		});
	}
};




