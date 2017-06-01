(function() {
    'use strict';

    angular
        .module('project1App')
        .controller('encjaController', encjaController);

    encjaController.$inject = ['$scope','nowaEncja'];

    function encjaController($scope, nowaEncja) {

        var vm = this;
          vm.przelicz = function() {
            $scope.wynik = nowaEncja.przelicz($scope.wart1, $scope.wart2);
          }

      }
})();
