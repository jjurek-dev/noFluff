angular.module('noFluffApp.controller', []).
controller('noFluffController', function($scope, offersService, $state) {

    $scope.submitting = false;

    offersService.getList().then(function(response) {
        $scope.offersList = response;
    });

    $scope.addPosting = function() {
        $scope.submitting = true;
        offersService.addOffer($scope.offer).then(function(response) {
            if (response) {
                $state.go('home');
                $scope.submitting = false;
            }
        });
    };

});