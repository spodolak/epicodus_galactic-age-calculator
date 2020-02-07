export class GalacticAge	{
	constructor(age)  {
		this.age = age;
	}
	
	solarAge(planetSolarYear)	{
		this.age = +((this.age*365)/planetSolarYear).toFixed(2);
		return this.age;
	}
	
	calculateGalacticAges() {
		this.galacticAges = [];
		return this.galacticAges;
	}
};




// [87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182]