class View {
  clearMarkup() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = "";
    this.clearMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default View;
