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
	
	$stateProvider.state(homeState);
	$stateProvider.state(aboutState);
	
	//default routing
	$urlRouterProvider.otherwise('/');
	
});