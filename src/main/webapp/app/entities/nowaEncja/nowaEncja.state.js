(function() {
    'use strict';

    angular
        .module('project1App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('nowaEncja', {
          data: {
              authorities: ['ROLE_USER'],
              pageTitle: 'Password'
          },
            parent: 'entity',
            url: '/nowaEncja',
            views: {
                'content@': {
                    templateUrl: 'app/entities/nowaEncja/nowaEncja.html',
                    controller: 'encjaController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
      }
    })();
