# Highway Code Quiz -  Testing

IMAGE HERE OF MOCK UP OF GAME SITE ****

Visit the deployed site: LINK HERE

- - -

## CONTENTS

* [AUTOMATED TESTING](#AUTOMATED-TESTING)
    * [W3C Validator](#W3C-Validator)
    * [JavaScript Validator](#JavaScript-Validator)
    * [Lighthouse](#Lighthouse)
    * Jest Testing / automated 
* [MANUAL TESTING](#MANUAL-TESTING)
    * [Testing User Stories](#Testing-User-Stories)
    * [Full Testing](#Full-Testing)
    * Bugs 

Testing was ongoing throughout the build. I utilised Chrome developer tools whilst building to pinpoint and troubleshoot any issues as I went along.

I used the console in the developer tools to work through sections of code and ensure that it was working correctly, and also troubleshoot where needed.

I have gone through each page using google chrome developer tools to ensure that each page is responsive on a variety of different screen sizes and devices.

---

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages. It was also used to validate the CSS file.

* [index.html] IMAGE HERE - Passed.
* [game.html] IMAGE HERE - Passed.
* [end.html] IMAGE HERE - Passed.
* [404.html] IMAGE HERE - Passed.
* [style.css] IMAGE HERE - Passed, no errors found.

---

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the JavaScript.

* [game.js] IMAGE HERE - Passed with one warning. Double == used instead of strict equals. 
* [end.js] IMAGE HERE - Passed.

---

### Lighthouse

Google Lighthouse within the Chrome Developer Tools was used to test for performance, accessibility, best practices and SEO.

### Desktop Results

Results for the site based on desktop viewing.

IMAGES HERE *****

### Mobile Results

Results for the site for mobile viewing. 

IMAGES HERE *****

---

## MANUAL TESTING

### Testing User Stories

`First Time Visitors`

| Goals | How are they achieved?                                                                                                                  |
| :--- |:----------------------------------------------------------------------------------------------------------------------------------------|
| I want to take to play the quiz quickly on my phone at any time, anywhere. | The Highway Code Quiz is designed in such a way that it is quick and easy to start a new game and is designed for mobile display first. |
| I want the game to be functional and responsive to my device. | The site is designed to be fully responsive and work on any device.                                                                     |
| I want the game to be easy to understand and navigate. | High contrast text and clearly marked buttons are used throughout the site for easy navigation.                                         |

`Returning Visitors`

|  Goals | How are they achieved?                                                                                                                                                       |
| :--- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| I want a new set of questions each time I visit so I can revise and learn new areas of the Highway Code. | Users will be provided with a new random selection of questions for each game. For proof of concept this project has a selection of just twenty questions that will be used. |

`Frequent Visitors`

| Goals | How are they achieved?                                                                                                                                                       |
| :--- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| I want to be able to quickly start playing a new game without the need to log in. | Users are able to start a new game without the need to log in or provide any details.                                                                                        |
| I want the game questions to be updated on a regular basis so that they are up to date and current with the latest version of the Highway Code. | The game has questions taken from the latest version of the Highway Code theory test. Longer term these questions could be updated easily without affecting the game design. |

---

### Full Testing

Full testing was performed on the following devices:

* Laptop:
  * Macbook Pro 2020 13 inch screen
  * Macbook Pro 2020 ext 27 inch monitor
* Mobile Devices:
  * iPhone 7 plus.
  * iPhone 6.

Each device tested the site using the following browsers:

* Google Chrome
* Safari
* Firefox

Additional testing was taken by friends and family on a variety of devices. 

On the home page screen when on the physical iPhone 6 safari browser the top of the word 'Highway' cutoff from the top of the screen.
While using chrome developer tools and emulating other various device screen sizes all sections of the homepage and game were visible and accessible. 

`Home Page`

| Feature               | Expected Outcome                                                       | Testing Performed | Result                    | Pass/Fail |
|-----------------------|------------------------------------------------------------------------| --- |---------------------------| --- |
| Play Button           | Directs the user to the game page                                      | Clicked on button | Game page opens | Pass |
| Button - hover effect | Play button should show drop shadow affect and move when hovered over. | Hover over each button on the page | Button displayed the correct styling when hovered over | Pass |


