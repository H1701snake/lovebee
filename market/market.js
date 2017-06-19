app.controller('marketCtrl',['$scope','$http','goods','cart',function($scope,$http,goods,cart){
	$scope.list = ['热销榜','天天特价','卤味熟食','牛奶面包','冰镇饮料','进口食品','牛奶面包','优选水果','热销榜','天天特价','牛奶面包','优选水果','热销榜','天天特价','牛奶面包','优选水果'];
//	$scope.listdata = [];
	$scope.goods = goods;
	$scope.text = '热销榜';
	$scope.num = 0;
	function request(text){
		
		if(!$scope.goods[$scope.text]){
			$http.get('http://h5.yztctech.net/api/axf/apicategory.php?category='+$scope.text)
		.success(function(mar){
			
				$scope.goods[$scope.text] = mar.data;
//				console.log($scope.goods)
	//			$scope.listData = mar.data;
			})
		console.log($scope.text);
		}
		
		
		
	}
	request();
	$scope.getData = function(text,index){
		$scope.num = index;
		$scope.text = text;
		request();
	}
	
	$scope.compute = function(item,num){
		if(item.num){
			item.num += num;
		}else{
			item.num = 1;
		}
		
		if(item.num>0){
			cart.addCart($scope.text+item.id,item);
		}else{
			cart.dele($scope.text+item.id,item);
		}
	}
}])