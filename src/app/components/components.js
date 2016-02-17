import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Forecast from './forecast/forecast'

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Forecast.name
]);

export default componentModule;
