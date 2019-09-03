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

// 1
// Build an articleMaker function that takes an object with title, text1 and text2 props.
// This function should return an article element containing an h3 and two paragraphs.
// The heading should display the title, and the two paragraphs should display text1 and text2 resp.

// 2
// Using the articleMaker, generate article elements using the articlesFromApi array of article data.

// 3
// loop over the generated article elements and attach them to the DOM.

// 4
// Improve the articleMaker so each article has a 'toggle' button to display or not the paragraphs.