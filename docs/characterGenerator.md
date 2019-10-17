# D&D Character Generator

Create an app using the D&D api (http://www.dnd5eapi.co/) that allows players who are new to the game to create a pre-populated character sheet. The app should take them through the creation of their character step by step.

### MVP
* User can give their character a name, chose race, class and alignment.
* App generates random stats between 8 and 18.
  * Highest roll is assigned to the primary stat for the class chosen.
  * The app takes the selected race and class to create appropriate stats alterations.
* Class determines the equipment the character is allowed and populates drop downs based on this.
  * App randomly generates a starting amount of Gold.
* User can print out/save the character as a PDF.

### Extension
* User can choose where rolled numbers are assigned in the stat block.
* User can save character sheet to a database.
* User can adjust their stats when their character levels up.

### Advanced Extension
* Show user the dice being rolled by reworking the number generation to represent 4D6.
 * User can select the 3 dice they want to create the stat from.
* User can use the generated gold to buy improved equipment.
