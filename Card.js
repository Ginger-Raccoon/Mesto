class Card {
  constructor(object) {
    this.object = object;
  }

  create() {
    const cardContainer = document.createElement('div');  // контейнер для карточки
    cardContainer.classList.add('place-card'); // присваиваем класс для контейнера

    const backgroundElement = document.createElement('div'); // создаем фон
    backgroundElement.classList.add('place-card__image'); // присваиваем класс для фона
    backgroundElement.style.backgroundImage = `url(${this.object.link})`; // записываем в фоновое изображение элемента bacgroundElement значение входящей переменной link

    const deleteButtonElement = document.createElement('button'); // создаем кнопку delete
    deleteButtonElement.classList.add('place-card__delete-icon');// присваиваем класс для кнопки delete

    const cardDescription = document.createElement('div'); // создаем контейнер description
    cardDescription.classList.add('place-card__description'); // присваиваем класс контейнеру description

    const nameElement = document.createElement('h3'); // создаем имя карточки
    nameElement.classList.add('place-card__name'); // присваиваем класс для имени карточки
    nameElement.textContent = this.object.name; // записываем в текстовое содержимое элемента nameElement значение входящей переменной nameValue

    const likeButtonElement = document.createElement('button'); // создаем кнопку лайка
    likeButtonElement.classList.add('place-card__like-icon'); // присваиваем класс для лайка

    cardContainer.appendChild(backgroundElement); // вкладываем в cardContainer элемент bacgroundElement
    backgroundElement.appendChild(deleteButtonElement); // вкладываем в bacgroundElement элемент deleteButtonElement
    cardContainer.appendChild(cardDescription); // вкладываем в cardContainer элемент cardDescription
    cardDescription.appendChild(nameElement); // вкладываем в cardDescription элемент nameElemen
    cardDescription.appendChild(likeButtonElement); // вкладываем в cardDescription элемент likeButtonElement
  
    this.cardElement = cardContainer;
    this.setListeners()
    return cardContainer;
  }  
  
  like() {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  remove = () => {
    this.removeListeners();
    event.target.closest('.place-card').remove();
    this.cardElement = null;
  }

  setListeners() {
    this.cardElement.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    this.cardElement.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
  }

  removeListeners() {
    this.cardElement.querySelector('.place-card__like-icon').removeEventListener('click', this.like);
    this.cardElement.querySelector('.place-card__delete-icon').removeEventListener('click', this.remove);
  }
}