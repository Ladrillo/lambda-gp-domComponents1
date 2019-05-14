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

articles.forEach(article => {
  new ArticleEnhancer(article);
});