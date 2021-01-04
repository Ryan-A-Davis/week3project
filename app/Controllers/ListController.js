import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js"


function _draw() {
  let lists = ProxyState.lists
  let templates = ''
  lists.forEach(list => {
    templates += list.Template
  });
  document.getElementById('lists').innerHTML = templates
  console.log('draw ran')
}

export default class ListController {
  constructor() {
    console.log("List controller created")
    _draw();
  }

  createList(event) {
    event.preventDefault();
    let formData = event.target;
    let rawList = {
      title: formData.title.value
    };
    console.log("making list")

    listService.createList(rawList)
    formData.reset()
    _draw()
  }
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    ProxyState.items = ProxyState.items.filter(i => i.listId != id)
  }

}