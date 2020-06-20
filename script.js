(function() {

const placesList = document.querySelector('.places-list');
const formAddCard = document.forms.new;
const formUser = document.forms.edit;

const popupAddCard = document.querySelector('.popup_add-card');
const popupEdit = document.querySelector('.popup_edit');
const popupPhoto = document.querySelector('.popup_increase');
const nameValue = document.querySelector('.user-info__name');
const jobValue = document.querySelector('.user-info__job');
const nameError = document.getElementById('name-error');
const linkError = document.getElementById('link-error');
const userNameError = document.getElementById('user-name-error');
const jobError = document.getElementById('job-error');

const cardList = new CardList(placesList, cardCreate);
const imagePopup = new ImagePopup(popupPhoto);
const popupNewCard = new Popup(popupAddCard);
const userInfo = new UserInfo(formUser, nameValue, jobValue, defaultUser);
const editPopup = new Popup(popupEdit);

const userFormValidator = new FormValidator(formUser);
const addCardFormValidator = new FormValidator(formAddCard);
addCardFormValidator.setEventListener();
addCardFormValidator.buttonDisabled();
userFormValidator.setEventListener();
userFormValidator.setEventListener();

// Работа с карточками
function cardCreate(cardData) {
  create = new Card(cardData);
  card = create.create();
  return card;
}

function defaultProfile() { // Функция - значение строк по умолчанию, попап - профиль
  userInfo.getUserInfo()
}
 
function createHomescreen() {  // Функция создания изначальных карточек из массива по его длинне
  cardList.render(initialCards);
  userInfo.defaultProfile();
}
createHomescreen(); // Вызов функции создания изначальных карточек из массива по его длинне



function openImage(event){
  if (event.target.classList.contains('place-card__image')) {
    imagePopup.open(event.target.style.backgroundImage.slice(5, -2)) 
  }
}

function closeImage(event) { // Функция закрытия попап - фото
  imagePopup.close();
}


function openNewCard(event){ // Функция открытия попап - новая карточка
  addCardFormValidator.buttonDisabled();
  popupNewCard.open();
}

function closeNewCard(event){ // Фунцкия закрытия попап - новая карточка 
  nameError.textContent = ' ';
  linkError.textContent = ' ';
  formAddCard.reset();
  popupNewCard.close();
}

function openEdit(event) { // Функция открытия -  попап профиль
  userFormValidator.buttonEnabled();
  editPopup.open();
  defaultProfile();
}

 function closeEdit(event) { //Фунция закрытия - попап профиль
  userNameError.textContent = ' ';
  jobError.textContent = ' ';
  editPopup.close();
}

function refreshProfile(event) { //функция обновления профиля
  event.preventDefault();
  if (userFormValidator.isFormValid()) {
    const userNameText = formUser.elements.name.value;
    const userJobText = formUser.elements.job.value;
    userInfo.updateUserInfo(userNameText, userJobText);
    closeEdit();
  }
}

function addCard(event) { // Функция - добавить карточку
  event.preventDefault();
  if (addCardFormValidator.isFormValid()) {
    const cardData = {
      name: formAddCard.elements.name.value,
      link: formAddCard.elements.link.value
    }
    cardList.addCard(cardData);
    closeNewCard();
  }
}

document.querySelector('.user-info__button').addEventListener('click', openNewCard); // слушатель формы на открытие

document.querySelector('.popup__close_add-card').addEventListener('click', closeNewCard);  // слушатель формы на закрытие

document.querySelector('.button_edit').addEventListener('click', openEdit); // слушатель формы на открытие

document.querySelector('.popup__close_edit').addEventListener('click', closeEdit); // слушатель формы на закрытие

placesList.addEventListener('click', openImage);

document.querySelector('.popup__close_increase').addEventListener('click', closeImage);

formAddCard.addEventListener('submit', addCard); // слушатель - добавить карточку sendForm
formUser.addEventListener('submit', refreshProfile); // слушатель - обновить профиль

}());
