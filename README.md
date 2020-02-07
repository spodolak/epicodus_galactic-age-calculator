# Galactic Age Calculator

#### A website deigned to calculate an individual's solar age for each planet in our galaxy. 02.07.2020

#### **By Stephanie Podolak**

## Description

This site is designed to take in the user's earth age and return their respetive solar age for each planet in our solar system. A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. If a person is Written in JavaScript, this program was built through test driven development using Jest. 


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|**Take user age and return in earth years by passing through GalacticAge object**| Age: 31 | Age In Earth Years: 31
|**Develop method to calculate users solar age given any planet's solar year using the following equation:** _planetAge = [(earthAge*365)/planetSolarYear]_| Age In Earth Years = 31, mercurySolarYear = 88 | mercuryAge = 193.2|
|**Create an arrray for planet solar years and run above method on each index of the array**|planetSolarYears[]|[88, 225, 365, 687...]|
|**Given user age, return solar year life expectancy on other planets assuming user will live to 100 years on earth**| Age in Earth Years = 31 | Years left on Mercury: 291 years|
|**Given user age over 100, return number of years past life expectancy| Age in Earth Years: 101 | Years left on Mercury: 4.17 years past expected|


## Setup/Installation Requirements

1. Clone this repository to your desktop. If using Git Bash you can do this by typing "git clone https://github.com/spodolak/galactic-age-calculator.git" into your command line while in desktop directory.
2. Navigate inside project directory by entering "cd epicodus_galactic-age-calculator" in Git Bash.
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

*{This software is licensed under the MIT license}*

Copyright (c) 2020 **_{Stephanie Podolak}_**

