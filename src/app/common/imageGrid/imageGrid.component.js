import template from './imageGrid.html';
import controller from './imageGrid.controller';
import './imageGrid.scss';

let imageGridComponent = {
  restrict: 'E',
  bindings: {
    imageSource: '=',
    imageString: '@'
  },
  template,
  controller,
  controllerAs: 'imageGridController'
};

export default imageGridComponent;
