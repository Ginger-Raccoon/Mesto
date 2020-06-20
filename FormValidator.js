class FormValidator {
  constructor(form) {
    this.form = form;
    this.handlerInputForm = this.handlerInputForm.bind(this)
  }

  isFormValid(){
    const inputs = [...this.form.elements];
    let valid = true;
    inputs.every((input) => {
      if (input.type !== 'submit' && input.type !== 'button') {
        if (this.checkInputValidity(input)) valid != false;
      }
    });
    return valid;
  }
    
  checkInputValidity(input) {
    const errorElem = input.parentNode.querySelector(`#${input.id}-error`);
    const valid = this.isValidate(input); // устанавливаем инпуту кастомные ошибки, если они есть.
    errorElem.textContent = input.validationMessage;
    return valid;
  }

  isValidate(input) {
    input.setCustomValidity(""); //устанавливаем свойсво validity.customError в false 

    // если на инпуте есть атрибут required, поле validity.valueMissing будет true / false (заполнено)
    if (input.validity.valueMissing) {
      // текст ошибки записываем в inputElem.validationMessage с помощью input.setCustomValidity()
      input.setCustomValidity('Это обязательное поле');
      return false
    }
  
    // если на инпуте есть атрибут minlength, поле validity.tooShort будет true / false (достигнута мин. длина)
    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity('Должно быть от 2 до 30 символов');
      return false
    }
  
    // если на инпуте есть атрибут type, поле validity.typeMismatch будет true / false (сопадение типа)
    if (input.validity.typeMismatch && input.type === 'url') {
      input.setCustomValidity('Здесь должна быть ссылка');
      return false
    }
  
    return input.checkValidity();
  }

  

  setSubmitButtonState(button, state) {
    if (state) {
  
        button.disabled = 0;
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
        button.disabled = 1;
    }
  }


  handlerInputForm(event) { 
    console.log(event.currentTarget)
      const submit = event.currentTarget.querySelector('.button');
      submit.removeAttribute('disabled');
      const [...inputs] = event.target.parentNode.elements; // превращаем итератор(итерируемый объект) в массив
      this.checkInputValidity(event.target); // проверяем поле на валидность и выводим ошибку если не валидно.
    
    
      if (inputs.every(this.isValidate)) { // если каждый инпут формы вернул true, то включаем кнопку в противном случае выключаем
        this.setSubmitButtonState(submit, true);
      } else {
        this.setSubmitButtonState(submit, false);
      }
  }
  
  setEventListener() {
    this.form.addEventListener('input', this.handlerInputForm, true);
  }

  buttonDisabled() {
    const submit = this.form.querySelector('.button');
    submit.setAttribute('disabled', '');
  }

  buttonEnabled() {
    const submit = this.form.querySelector('.button');
    submit.removeAttribute('disabled');
  }
}