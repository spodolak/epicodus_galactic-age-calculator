export class GalacticAge	{
	constructor(age)  {
		this.age = age;
	}
	
	solarAge(planetSolarYear)	{
		this.age = +((this.age*365)/planetSolarYear).toFixed(2);
		return this.age;
	}

};

