import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs'

export default class RouteConfig {
  constructor ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) {

    $stateProvider
      .state('home', {
        name: 'home',
        url: '/home',
        template: `
          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
           <h1 class="display-4">Página Home</h1>
           <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
          </div>
        `
      })
      .state('about', {
        name: 'about',
        url: '/about',
        templateUrl: './src/pages/about.html'
      })
      .state('contact', {
        name: 'contact',
        url: '/contact',
        templateUrl: './src/pages/contact.html'
      })
      $urlRouterProvider.otherwise('/home')
  }
}