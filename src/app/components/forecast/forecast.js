import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forecastComponent from './forecast.component';

let forecastModule = angular.module('forecast', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('forecast', {
      url: '/forecast',
      template: '<forecast></forecast>'
    });
})

.component('forecast', forecastComponent);

export default forecastModule;
