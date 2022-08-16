class View {
  clearMarkup() {
    this._parentElement.innerHTML = "";
    console.log("clearMarkup");
  }

  renderMessage() {}

  renderSpinner() {
    const markup =
      '<div class="spinner"><i class="fa-solid fa-spinner"></i></div>';

    this.clearMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    console.log("renderspinner");
  }
}

export default View;
