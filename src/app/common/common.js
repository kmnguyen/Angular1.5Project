import angular from 'angular';
import Navbar from './navbar/navbar';
import ImageGrid from './imageGrid/imageGrid'

let commonModule = angular.module('app.common', [
  Navbar.name,
  ImageGrid.name
]);

export default commonModule;
