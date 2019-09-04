// 1
// Implement a function called buttonMaker. This function will take an object as its only argument.
// Arguments passed to buttonMaker will look like this: { label: "click me", action: () => console.log("you clicked!") }
// The buttonMaker, when invoked, should RETURN an HTML button element.
// The returned button should have text matching the label property of the argument.
// The returned button should be red and have a border radius of 5px.
// The returned button, when clicked, should perform the action passed in the action property of the argument.

function buttonMaker(/* code here */) {
  // and code here
}
const prettyButton = buttonMaker({
  label: "I am pretty",
  action: () => console.log("ouch!")
});
const uglyButton = buttonMaker({
  label: "I am ugly",
  action: () => console.log("ay!")
});
prettyButton && document.body.insertAdjacentElement('afterbegin', prettyButton);
uglyButton && document.body.insertAdjacentElement('afterbegin', uglyButton);



// 2
// Build an articleMaker function that takes an object with title, text1 and text2 properties.
// This function should RETURN an article HTML element containing an h3 and two paragraphs.
// The heading should display the title, and the two paragraphs should display text1 and text2 respectively.



// 3
// Using the articleMaker, generate article elements using the articlesFromApi array of article data.
const articlesFromApi = [
  {
    title: 'Sheep',
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Lambs',
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Wolves',
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];



// 4
// loop over the generated article elements and attach them to the DOM.



// 5
// Improve the articleMaker so each article has a 'toggle' button to display or not the paragraphs.