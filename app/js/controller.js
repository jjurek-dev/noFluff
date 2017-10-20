angular.module('noFluffApp.controller', []).
controller('noFluffController', function($scope, offersService, $state) {

    $scope.submitting = false;

    offersService.getList().then(function(response) {
        $scope.offersList = response;
    });

    $scope.addPosting = function() {
        $scope.submitting = true;
        console.log($scope.offer);
        offersService.addOffer($scope.offer).then(function(response) {
            if (response) {
                $scope.submitting = false;
                $state.go('home');
            }
        });
    };

});