
app.controller('homeCtrl',['$scope','$http','$timeout',function($scope,$http,$timeout){
	$scope.data = {};
	$scope.shop = [];
	$http.get('http://h5.yztctech.net/api/axf/apihome.php')
	.success(function(req){
		$scope.data = req.data;
		$timeout(function(){
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        spaceBetween: 30,
		        autoplay: 2500,
		        loop: true
		    });
		},100)
		 
	});
	$http.get('http://h5.yztctech.net/api/axf/apihomehot.php')
	.success(function(rm){
		$scope.shop = rm.data;
	});
}])