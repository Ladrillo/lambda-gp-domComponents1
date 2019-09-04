// 1
// IMPLEMENT A FUNCTION called buttonMaker.
// - It expects an object as its only argument.
// - The argument passed to buttonMaker will look similar to:
//      { label: "click me", callback: () => console.log("you clicked!") }
// - The buttonMaker, when invoked, should RETURN an HTML button element.
// - The returned button should have text matching the `label` property of the argument.
// - The returned button should be red and have a border radius of 5px. (STRETCH)
// - The returned button, when clicked, should invoke the callback passed in the `callback` prop of the argument.

function buttonMaker(settings) {
  const { label, callback, styles } = settings;
  let button = document.createElement('button');

  button.textContent = label;

  const color = styles ? styles.color : 'red';
  const borderRadius = styles ? styles.borderRadius : '5px';

  button.style.color = color;
  button.style.borderRadius = borderRadius;

  button.addEventListener('click', callback);

  return button;
}
// NO need to code down here. This is testing your buttonMaker:
const prettyButton = buttonMaker({
  label: "I am pretty",
  callback: () => console.log("ouch!"),
  styles: {
    color: 'green',
    borderRadius: '10px'
  },
});
const uglyButton = buttonMaker({
  label: "I am ugly",
  callback: () => console.log("ay!")
});
// prettyButton && document.body.insertAdjacentElement('afterbegin', prettyButton);
// uglyButton && document.body.insertAdjacentElement('afterbegin', uglyButton);



// 2
// Build an articleMaker function that takes an object with title, text1 and text2 properties.
// This function should RETURN an article HTML element containing an h3 and two paragraphs.
// The heading should display the title, and the two paragraphs should display text1 and text2 respectively.

function articleMaker({ title, text1, text2 }) {
  debugger

  const article = document.createElement('article');
  const h3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  // const [article, h3, p1, p2] = ['article', 'h3', 'p', 'p']
  //   .map(element => document.createElement(element));

  h3.textContent = title;
  p1.textContent = text1;
  p2.textContent = text2;

  article.appendChild(h3);
  article.appendChild(p1);
  article.appendChild(p2);

  return article;
}

const testArticle = articleMaker({
  title: 'Sheep',
  text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
});

// 3
// Using the articleMaker, generate article elements using the articlesFromApi array of article data.
// Hint: you can loop over articlesFromApi, generating articles as you go, or you can use .map.

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
