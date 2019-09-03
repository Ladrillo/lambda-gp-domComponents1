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

function articleMaker(data) {
  const { heading, paragraph1, paragraph2 } = data;

  const article = document.createElement('article');
  const h3 = document.createElement('h3');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const button = document.createElement('button');

  h3.textContent = heading;
  p1.textContent = paragraph1;
  p2.textContent = paragraph2;
  p1.classList.add('hidden');
  p2.classList.add('hidden');

  button.textContent = 'toggle'
  button.addEventListener('click', e => {
    p1.classList.toggle('hidden');
    p2.classList.toggle('hidden');
  });

  article.insertAdjacentElement('afterbegin', h3);
  article.insertAdjacentElement('beforeend', p1);
  article.insertAdjacentElement('beforeend', p2);
  article.insertAdjacentElement('beforeend', button);

  return article;
}

const articles = articleData.map(data => articleMaker(data))
 
articles.forEach(article => {
  document.querySelector('.articles')
    .insertAdjacentElement('beforeend', article);
});

document.querySelectorAll('article:nth-child(odd)')
  .forEach(thing => thing.classList.add('special'))

