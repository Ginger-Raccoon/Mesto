class UserInfo {

  constructor(form, nameContainer, jobContainer, arr) {
    this.nameContainer = nameContainer;
    this.jobContainer = jobContainer;
    this.arr = arr;
    this.form = form;
  }

  defaultProfile() {
    this.name = this.arr[0].userName;
    this.job = this.arr[0].userJob;
    this.setUserInfo()
  }

  updateUserInfo (name, job) {
    this.name = name;
    this.job = job;
    this.setUserInfo()
  }
  
  setUserInfo() {
    this.nameContainer.textContent = this.name;
    this.jobContainer.textContent = this.job;
  } 

  getUserInfo() {
    this.form.elements.name.value = this.nameContainer.textContent;
    this.form.elements.job.value = this.jobContainer.textContent;
  }
}

