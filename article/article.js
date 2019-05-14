const articles = document.querySelectorAll('#petsContainer .pet-article');

const showText = 'Show';
const hideText = 'Hide';

class ArticleEnhancer {
  constructor(article) {
    this.article = article;
    this.paragraphs = this.article.querySelectorAll('p');
    this.addMagicButton();
    this.toggleParagraphs();
  }

  toggleParagraphs() {
    this.paragraphs.forEach(p => {
      p.classList.toggle('hidden');
    });
  }

  addMagicButton() {
    const button = document.createElement('button');
    button.textContent = 'Toggle';
    button.addEventListener('click', this.toggleParagraphs.bind(this))
    this.article.insertAdjacentElement('beforeend', button);
  }
}

const articleData = [
  {
    heading: 'Sheep',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'Lambs',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    heading: 'Wolves',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];


// articles.forEach(article => {
//   new ArticleEnhancer(article);
// });

class ArticleGenerator {
  constructor(domNode, data) {
    this.article = domNode;
    this.articleData = data;
    this.createHeading();
    this.createParagraphs();
  }

  createHeading() {
    const heading = document.createElement('h3');
    heading.textContent = this.articleData.heading;
    this.article.appendChild(heading);
  }

  createParagraphs() {
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.textContent = this.articleData.paragraph1;
    p2.textContent = this.articleData.paragraph2;
    this.article.insertAdjacentElement('beforeend', p1);
    this.article.insertAdjacentElement('beforeend', p2);
  }
}

articles.forEach((article, idx) => {
  new ArticleGenerator(article, articleData[idx]);
  new ArticleEnhancer(article);
})