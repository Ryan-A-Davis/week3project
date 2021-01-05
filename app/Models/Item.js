import { generateId } from "../Utils/GenerateId.js"

export default class Item {
  constructor({ title, listId, id }) {
    this.title = title
    this.id = id || generateId()
    this.listId = listId
  }

  get Template() {
    return `
      <div class = "col-6">
        <div class ="d-inline">
        <h4>${this.title}</h4>
        <button class ="btn btn-danger" onclick = "app.itemController.deleteItem('${this.id}')">Delete Item</button>
        </div>
      </div>
    `
  }
}