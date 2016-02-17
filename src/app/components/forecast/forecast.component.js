import template from './forecast.html';
import controller from './forecast.controller';

let forecastComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default forecastComponent;
