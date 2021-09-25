(function () {
  'use strict'

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService ($http) {
    var service = this;
    service.getAllCategories = function () {
      var response = $http({method: "GET",
                     url: ("https://davids-restaurant.herokuapp.com/categories.json")
                      });
      return response;  }

    service.getItemsForCategory = function (categoryShortName) {
      var responses = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json"),
        params: {category: "{{categoryShortName}}"}
      });
      return responses;
    }


  }
})();
