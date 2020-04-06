# Galactic Age Calculator

#### A website deigned to calculate an individual's solar age for each planet in our galaxy. 02.07.2020

#### **By Stephanie Podolak**

## Description

This site is designed to take in the user's earth age and return their respetive solar age for each planet in our solar system. A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. If a person is Written in JavaScript, this program was built through test driven development using Jest. 


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|**Take user age and return in earth years by passing through GalacticAge object**| Age: 31 | Age In Earth Years: 31
|**Calculate user's solar age given any planet's solar year**| Age In Earth Years = 31, mercurySolarYear = 88 | mercuryAge = 193.2|
|**Create an array of solar year conversion factors for each planet**|Planets: Mercury, Venus Earth, Mars, Jupiter, Saturn, Uranus, Neptune|Conversion factors _(respectively)_: 87.6, 224.548, 365, 686.5285, 4329.557, 10759, 30688.5, 60182|
|**Given user age, return solar year life expectancy on other planets assuming user will live to 100 years on earth**| Age in Earth Years = 31 | Years left on Mercury: 287. Years left on Venus: 112.16. Years left on Earth: 69. Years left on Mars: 36.68. Years left on Jupiter: 5.82. Years left on Saturn: 2.34. Years left on Uranus: 0.82. Years left on Neptune: 0.42.|
|**Given user age over 100 year life expectancy, return number of years past life expectancy for each planet**| Age in Earth Years: 101 | Years left on Mercury: 4.17 years past expected. Years left on Venus: 1.63 years past expected. Years left on Earth: 1 year past expected. Years left on Mars: 0.53 years past expected. Years left on Jupiter: 0.08 years past expected. Years left on Saturn: 0.03 years past expected. Years left on Uranus: 0.01 years past expected. Years left on Neptune: 0.01 years past expected.|


## Setup/Installation Requirements

1. Clone this repository to your desktop. If using Git Bash you can do this by typing "git clone https://github.com/spodolak/GalacticAgeCalculator.git" into your command line while in desktop directory.
2. Navigate inside project directory by entering "cd GalacticAgeCalculator" in Git Bash.
3. Open index.html file in your browser of choice by entering "open index.html".


## Known Bugs
* No known bugs at this time.

## Technologies Used (_See package.json in main project directory for a full list of dependencies_)
* JavaScript
* jQuery-3.4.1
* Jest
* Babel 
* HTML
* CSS
* Bootstrap-4.4.1
* Google Fonts

## Support and Contact Details

_For any questions or comments please contact:_ Stephanie Podolak


### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Stephanie Podolak_**

