var model = {
    items: [
        { purchase: "Хліб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картопля", done: false, price: 22.6 },
        { purchase: "Сир", done: false, price:310 }
    ]
};
var purchaseApp = angular.module("purchaseApp", []);
    purchaseApp.controller("purchaseController", function ($scope) {
    $scope.list = model;
    $scope.name = 'Отримати Чек';

    $scope.addItem = function (text, price) {
        price = parseFloat(price); 
        if(text != "" && !isNaN(price))
        {
            $scope.list.items.push({ purchase: text, price: price, done: false });
        }
    }

    $scope.deleteItem = function () {
  
    	$scope.list.items.splice( $scope.list.items.length - 1, 1 );
    }

    $scope.clearCheckBox = function () {
    	
    	for (var i = 0; i < $scope.list.items.length; i++) {
    		$scope.list.items[i].done = false;
    	}
    }

    $scope.getPriceList = function () {
    		$scope.sum = 0;
    	for (var i = 0; i < $scope.list.items.length; i++) {
    		if($scope.list.items[i].done == false){
    			 $scope.list.items.splice( i, 1 );
    			 i--;
    			} else {
    				$scope.sum  += $scope.list.items[i].price;
    			 	
    		} 
    	}
    }

    $scope.changeButName = function (a) {
    	if (a != true) {
    		$scope.name = 'Отримати Чек';
    	} else {
    		$scope.name = 'Назад';
    	}
    }
});

