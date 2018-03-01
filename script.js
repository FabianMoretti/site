var model = {
    items: [
        { purchase: "Хліб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картопля", done: false, price: 22.6 },
        { purchase: "Сир", done: false, price:310 }
    ]
};
var purchaseApp = angular.module("purchaseApp", []);
    purchaseApp.controller("purchaseController", function () {
    this.list = model;
    this.name = 'Отримати Чек';

    this.addItem = function (text, price) {
        price = parseFloat(price); 
        if(text != "" && !isNaN(price))
        {
            this.list.items.push({ purchase: text, price: price, done: false });
        }
    }

    this.deleteItem = function () {
  
    	this.list.items.splice( this.list.items.length - 1, 1 );
    }

    this.clearCheckBox = function () {
    	
    	for (var i = 0; i < this.list.items.length; i++) {
    		this.list.items[i].done = false;
    	}
    }

    this.getPriceList = function () {
    		this.sum = 0;
    	for (var i = 0; i < this.list.items.length; i++) {
    		if(this.list.items[i].done == false){
    			 this.list.items.splice( i, 1 );
    			 i--;
    			} else {
    				this.sum  += this.list.items[i].price;
    			 	
    		} 
    	}
    }

    this.changeButName = function (a) {
    	if (a != true) {
    		this.name = 'Отримати Чек';
    	} else {
    		this.name = 'Назад';
    	}
    }
});

