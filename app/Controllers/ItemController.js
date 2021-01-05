import { itemService } from "../Services/ItemService.js"


export default class ItemController {
  constructor() {
    console.log("item controller")
  }

  addItem(listId) {

    window.event.preventDefault()
    let newItem = window.event.target

    let itemData = {
      // @ts-ignore
      title: newItem.item.value,
      listId: listId
    }
    console.log(itemData)
    itemService.addItem(itemData)

  }

  deleteItem(itemId) {
    itemService.deleteItem(itemId)

  }
}

