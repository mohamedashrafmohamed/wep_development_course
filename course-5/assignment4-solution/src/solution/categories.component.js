(function () {
  'use strict';
  angular.module('data')
  .component('categories', {
    templateUrl: 'src/solution/templates/main-categories.template.html',
    bindings: {
      items: '<'
    }
  });



})();
