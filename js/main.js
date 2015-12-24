import angular from 'angular';
import $ from 'jquery';
import _ from 'underscore';

import Controller from './controller';



angular
  .module('app', [])
  .controller('Controller', Controller)
;