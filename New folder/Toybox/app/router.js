app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl : 'partials/home.html'
			
 		})
		.when('/Red',{
			templateUrl : 'partials/navbar.html'
			// controller  : 'loginController'
		})
		
		.otherwise({
			redirectTo : '/',
			controller  : ''
		})
}]);