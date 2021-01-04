import { generateId } from "../Utils/GenerateId.js"

export default class Item {
  constructor(title, listId, id) {
    this.title = title
    this.id = id || generateId()
    this.listId = listId
  }

  get Template() {
    return `
      <div class = "col-6">
      <h4>${this.title} 
      <button class ="btn btn-danger" onclick = "app.itemController.delete('${this.id}')">Delete Item</button>
      </h4>
      </div>
    `
  }
}