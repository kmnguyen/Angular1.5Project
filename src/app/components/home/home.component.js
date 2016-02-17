import template from './home.html';
import controller from './home.controller';

let homeComponent = {
  restrict: 'E',
  require: 'ngModel',
  bindings: {
    city: '=?ngModel'
  },
  template,
  controller,
  controllerAs: 'homeController'
};

export default homeComponent;
