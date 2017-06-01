(function() {
    'use strict';
    angular
        .module('project1App')
        .factory('nowaEncja', nowaEncja);

    nowaEncja.$inject = [];

    function nowaEncja () {

         return{
           przelicz: function(a,b) {
            return parseInt(a) + parseInt(b);
          }
         }

      }

})();
