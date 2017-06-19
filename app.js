var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'home/home.html',
		controller:'homeCtrl'
	})
	.when('/market',{
		templateUrl:'market/market.html',
		controller:'marketCtrl'
	})
	.when('/reserve',{
		templateUrl:'reserve/reserve.html',
		controller:'reserveCtrl'
	})
	.when('/cart',{
		templateUrl:'cart/cart.html',
		controller:'cartCtrl'
	})
	.otherwise('/home')
}])