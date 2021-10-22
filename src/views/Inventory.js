import View from "./View.js";

export default class extends View {
  constructor() {
    super();
    this.setTitle("Inventory");
  }

  async getHtml() {
    return `
      <h1>Inventory</h1>
    `;
  }
}
