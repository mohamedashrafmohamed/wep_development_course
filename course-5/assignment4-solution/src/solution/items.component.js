(function () {
  'use strict';
  angular.module('data')
  .component('items', {
    templateUrl: 'src/solution/templates/categories.template.html',
    bindings: {
      items: '<'
    }
  });



})();
