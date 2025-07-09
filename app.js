(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchItems = '';
    $scope.message = '';
    $scope.messageStyle = {};
    $scope.inputStyle = {};

    $scope.checkIfTooMuch = function () {
      // Trimmed input from ng-model already
      var items = $scope.lunchItems.split(',');

      // BONUS: Filter out empty items (spaces or empty strings)
      var validItems = items.filter(function (item) {
        return item.trim() !== '';
      });

      if (!$scope.lunchItems || $scope.lunchItems.trim() === '') {
        $scope.message = 'Please enter data first';
        $scope.messageStyle = { color: 'red' };
        $scope.inputStyle = { borderColor: 'red' };
      } else if (validItems.length <= 3) {
        $scope.message = 'Enjoy!';
        $scope.messageStyle = { color: 'green' };
        $scope.inputStyle = { borderColor: 'green' };
      } else {
        $scope.message = 'Too much!';
        $scope.messageStyle = { color: 'green' };
        $scope.inputStyle = { borderColor: 'green' };
      }
    };
  }
})();
