import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import { saveState } from "../Utils/LocalStorage.js"


class ListService {
  constructor() {
    console.log("message from the service")
    ProxyState.on("lists", saveState)
  }

  createList(formData) {
    let list = new List(formData)
    let lists = ProxyState.lists
    lists.push(list)
    ProxyState.lists = lists
  }
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    ProxyState.items = ProxyState.items.filter(i => i.listId != id)
  }

}

export const listService = new ListService()