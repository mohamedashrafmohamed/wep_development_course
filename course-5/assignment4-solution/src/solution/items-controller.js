(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(MenuDataService, items) {
  var mainList = this;
  mainList.items = items;
}

})();
