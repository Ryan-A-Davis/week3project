import ListController from "./Controllers/ListController.js";
import ItemController from "./Controllers/ItemController.js"


class App {
  listController = new ListController();
  itemController = new ItemController();

}

window["app"] = new App();
