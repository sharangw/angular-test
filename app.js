var app = angular.module("AppModule", ['ui.router']);

app.factory("MySimpleService", function() {
	
	return {
        name : 'test'
    };
    
}); 

app.config(function($stateProvider, $urlRouterProvider) {
	
	var homeState = {
		name: 'home',
		url: '/',
		templateUrl: 'templs/home.html',		
	};
			
	var aboutState = {
		name: 'about',
		url: '/about',
		templateUrl: 'templs/about.html',
	};

	var carState = {
		name: 'cars',
		url: '/cars',
		templateUrl: 'templs/cars.html',
	};

	var pokeState = {
		name: 'poke',
		url: '/poke',
		templateUrl: 'templs/poke.html',
	};
	
	$stateProvider.state(homeState);
	$stateProvider.state(aboutState);
	$stateProvider.state(carState);
	$stateProvider.state(pokeState);
	
	//default routing
	$urlRouterProvider.otherwise('/');
	
});