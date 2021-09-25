(function() {
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective);


function foundItemsDirective() {
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    }
    // controller: ShoppingListDirectiveController,
    // controllerAs: 'list',
    // bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchedTerm = "";
  list.found = [];
  list.narrowIt = function () {
    list.found = MenuSearchService.getMatchedMenuItems(list.searchedTerm);
  };
  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject= ['$http']
function MenuSearchService ($http) {
  var service = this;
  service.getMatchedMenuItems = function (searchTerm) {
    return $http({method: "GET", url: ("https://davids-restaurant.herokuapp.com/menu_items.json")})
    .then(function (result) {
      var foundItems = [];
      for (var i = 0; i < result.data.length; i++) {
        var name = result.data[i];
        if (name.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(result.data[i]);
        }
      }
      return foundItems;
    });
  }
}

})();
