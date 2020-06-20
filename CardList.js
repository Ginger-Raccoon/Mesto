class CardList {
  constructor(container, create) {
    this.container = container;
    this.create = create

  }

  addCard(cardData) {
    this.container.appendChild(this.create(cardData));
  }

  render(arr) {
    arr.forEach((arr) => {
      const name = arr.name; // получаем "имя" из массива в зависимости от количества итераций
      const link = arr.link
      const cardData = {
        name: name,
        link: link
      }
      this.addCard(cardData);
    });}
}

