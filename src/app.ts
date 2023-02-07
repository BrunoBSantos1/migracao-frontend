

// Declare app level module which depends on views, and core components
import * as angular from 'angular'
import '@uirouter/angularjs'
import './polyfills.ts';

// Route
import RouteConfig  from './route'

angular
  .module('app', ['ui.router'])
  .config(RouteConfig)
