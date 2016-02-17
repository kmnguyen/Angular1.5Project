import angular from 'angular';
import uiRouter from 'angular-ui-router';
import imageGridCompoent from './imageGrid.component';

let navbarModule = angular.module('imageGrid', [
  uiRouter
])

.component('imageGrid', imageGridCompoent);

export default navbarModule;
