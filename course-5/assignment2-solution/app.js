(function () {
  'use strict';
  var shoppingList = [
    { name: "Milk ", quantity: "2"}, { name: "Cookies", quantity: "3"},
    { name: "Donuts ", quantity: "5"}, { name: "Soda", quantity: "6"},
    { name: "Chocolite ", quantity: "7"}
  ];
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', Cntrler)
  .controller('AlreadyBoughtController', Cntrleer)
  .service('ShoppingListCheckOffService', CustomService);

Cntrler.$inject = ['ShoppingListCheckOffService'];
function Cntrler(ShoppingListCheckOffService) {
  var showitem = this;
  showitem.items = ShoppingListCheckOffService.getItems();

  showitem.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

}

Cntrleer.$inject = ['ShoppingListCheckOffService'];
function Cntrleer(ShoppingListCheckOffService) {
  var boughtitem = this;
  boughtitem.aitems = ShoppingListCheckOffService.getalreadyItems();
}

function CustomService() {
  var service = this;
  var items = shoppingList;
  var alreadyitems = [];
  service.removeItem = function (itemIndex) {
    alreadyitems.push(items[itemIndex])
    items.splice(itemIndex, 1);
  };
  service.getItems = function () {
    return items;
  };
  service.getalreadyItems = function () {
    return alreadyitems;
  };
}
})();
