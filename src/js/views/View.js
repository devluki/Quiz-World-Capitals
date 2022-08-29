class View {
  clearMarkup() {
    this._parentElement.innerHTML = "";
    console.log("clearMarkup");
  }

  render(markup) {
    // const markup = this._generateMakrup();
    this.clearMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup =
      '<div class="spinner"><i class="fa-solid fa-spinner fa-spin"></i></div>';

    this.clearMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    console.log("renderspinner");
  }
}

export default View;
