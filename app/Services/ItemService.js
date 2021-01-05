import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"
import { saveState } from "../Utils/LocalStorage.js"

class ItemService {

  addItem(formData) {
    let newItem = new Item(formData)
    let items = ProxyState.items
    items.push(newItem)
    ProxyState.items = items
    ProxyState.lists.find(l => l.id === newItem.listId ? l.itemCount += 1 : false)
  }
  deleteItem(itemId) {
    let positive = window.confirm("Are you sure you want to delete this task?")
    if (positive == true) {
      let deadItem = ProxyState.items.find(i => i.id === itemId)
      ProxyState.items = ProxyState.items.filter(i => i.id != itemId)
      ProxyState.lists.find(l => l.id === deadItem.listId ? l.itemCount -= 1 : false)
    } else
      alert('Ok')

  }
  constructor() {
    ProxyState.on("items", saveState)
  }

}

export const itemService = new ItemService()