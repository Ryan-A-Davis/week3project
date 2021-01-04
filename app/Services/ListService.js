import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"


class ListService {
  constructor() {
    console.log("message from the service")
  }

  createList(formData) {
    let list = new List(formData)
    let lists = ProxyState.lists
    lists.push(list)
    ProxyState.lists = lists
  }


}

export const listService = new ListService()