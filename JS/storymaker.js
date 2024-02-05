// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyParagraph = document.getElementById("story");
const studentIdParagraph = document.getElementById("studentId");

// Variables for pre-defined arrays
const nouns1Array = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbsArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectivesArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2Array = ["goat", "monkey", "fish", "cow", "bug", "worm"];
const settingsArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let countNoun1 = 0;
let countVerb = 0;
let countAdjective = 0;
let countNoun2 = 0;
let countSetting = 0;

/* Functions
-------------------------------------------------- */
// Add your student ID/name dynamically
function updateStudentId() {
    const studentId = "YourStudentID"; // Replace with your actual student ID or name
    studentIdParagraph.textContent = `Student ID: ${200549269}`;
}

function noun1_on_click() {
    // variable to get array element and displaying it
    choosenNoun1.textContent = nouns1Array[countNoun1];
    countNoun1 = (countNoun1 + 1) % nouns1Array.length;
}

function verb_on_click() {
    choosenVerb.textContent = verbsArray[countVerb];
    countVerb = (countVerb + 1) % verbsArray.length;
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectivesArray[countAdjective];
    countAdjective = (countAdjective + 1) % adjectivesArray.length;
}

function noun2_on_click() {
    choosenNoun2.textContent = nouns2Array[countNoun2];
    countNoun2 = (countNoun2 + 1) % nouns2Array.length;
}

function setting_on_click() {
    choosenSetting.textContent = settingsArray[countSetting];
    countSetting = (countSetting + 1) % settingsArray.length;
}

// concatenate the user story and display
function playback_on_click() {
    const storyText = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} in ${choosenSetting.textContent}.`;
    storyParagraph.textContent = storyText;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomStory = `${getRandomElement(nouns1Array)} ${getRandomElement(verbsArray)} ${getRandomElement(adjectivesArray)} ${getRandomElement(nouns2Array)} in ${getRandomElement(settingsArray)}.`;
    storyParagraph.textContent = randomStory;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);

playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);

// Add event listener for your student ID/name
document.addEventListener("DOMContentLoaded", updateStudentId);
