class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  open() {
    this.popup.classList.add('popup_is-opened');
  }

  close() {
    this.popup.classList.remove('popup_is-opened');
  }
  
}
