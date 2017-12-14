productsListApp.factory('productsListService', ['$http', function ($http){
    var productsListService = {};
    productsListService.loadData  = function () {
        return $http.get('dataJson/data.json');
    };
    return productsListService;
}]);