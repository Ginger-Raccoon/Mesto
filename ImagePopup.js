class ImagePopup extends Popup {
  constructor(popup) {
    super(popup);
    this.photo = this.popup.querySelector('.popup__increase-photo');
  }

  open(photoUrl) {
    this.photo.src = photoUrl
    super.open();
  }
}