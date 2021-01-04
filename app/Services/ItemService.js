import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"

class ItemService {

  addItem(formData) {
    let newItem = new Item(formData)
    let items = ProxyState.items
    items.push(newItem)
    ProxyState.items = items
  }

}

export const itemService = new ItemService()