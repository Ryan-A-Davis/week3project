import { itemService } from "../Services/ItemService.js"

export default class ItemController {
  constructor() {
    console.log("item controller")
  }

  addItem(listId) {
    window.event.preventDefault()

    let newItem = window.event.target

    let itemData = {
      title: newItem.title.value,
      listId: listId
    }
    itemService.addItem(itemData)

  }
}

