import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Item from "../Models/Item.js"

export function saveState() {
  localStorage.setItem("listData", JSON.stringify({ lists: ProxyState.lists, items: ProxyState.items }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem("listData"))
  if (data) {
    console.log(data, "data1")
    ProxyState.lists = data.lists.map(l => new List(l))
    ProxyState.items = data.items.map(i => new Item(i))
  }
}