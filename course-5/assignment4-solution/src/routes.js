(function () {
  'use strict';

  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'src/solution/templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/solution/templates/main-categories.template.html',
      controller: 'MainCategoriesController as mainCat',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }
        ]}
    })
    .state('itemDetail', {
      // url: '/items',
      templateUrl: 'src/solution/templates/categories.template.html',
      controller: 'ItemsController as mainList',
      resolve: {
        items: ['MenuDataService', '$stateParams' function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.itemId);
        }
        ]}
    });



  }

})();
