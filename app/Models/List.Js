import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({ title, id }) {
    this.title = title
    this.id = id || generateId()
    this.itemCount = 0
  }

  get Template() {
    return `
    <div class="col-4 card">
        <div class="card-header bg-success text-center">
          <h2>${this.title} <button class ="btn btn-danger" onclick= "app.listController.deleteList('${this.id}')">Delete</button></h2>
          <p>Completed items/${this.itemCount}</p>
        </div>
        <div class="card-body">
          <p class ="card-text" >TO DO'S:</p>
          <ul class = "list-inline">
          ${this.Items}
          </ul>
          
        </div>
        <div class="card-footer">
          <form onsubmit="app.itemController.addItem('${this.id}')">
            <input type="text" name='item' placeholder="Give me sommit tah dewwww" required minlength = "3" maxlength = "50">
            <button class='bg-primary'>Add Item</button>
          </form>
        </div>
    </div>
    `
  }

  get Items() {
    let template = ""
    let items = ProxyState.items.filter(i => i.listId == this.id)
    items.forEach(i => template += i.Template)
    return template
  }


}