productsListApp.controller('productsListCtrl',function($scope, $http, productsListService){
    $scope.products = [];
    $scope.allProducts = 0;
    $scope.isOwn = false;
    $scope.showDetails = false;
    $scope.showWarning = true;
    $scope.isSelected = false;
    $scope.amount = null;
    $scope.startItem = null;
    $scope.endItem = null;

    $scope.getData = function (val) {
        productsListService.loadData().then(function (response) {
            $scope.products = response.data;
            $scope.products.shift();
            $scope.allProducts = $scope.products.length;
            $scope.sliceList(val);
        });
    };
    $scope.sliceList = function (value) {
        if (value === 'small') {
            $scope.endItem = $scope.allProducts;
            $scope.startItem = 10;
        } else if(value === 'large') {
            $scope.endItem = 0;
            $scope.startItem = 10;
        } else {
            $scope.endItem = $scope.allProducts;
            $scope.startItem = $scope.amount;
        }
        $scope.products.splice($scope.startItem, $scope.endItem);
        $scope.showWarning = false;
        $scope.isSelected = true;
        $scope.search = "";
        $scope.showDetails = false;
    };
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
    $scope.showOwn =function () {
        $scope.isOwn = $scope.isOwn ? false: true;
    };
    $scope.selectTr = function () {
        var target = event.currentTarget;
        $scope.id = target.children[0].childNodes["0"].data;
        $scope.name = target.children[1].childNodes["0"].data;
        $scope.price = target.children[2].childNodes["0"].data;
        $scope.quantity = target.children[3].childNodes["0"].data;
        $scope.showDetails = true;
    };
});