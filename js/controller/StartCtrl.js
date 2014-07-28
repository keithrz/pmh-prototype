angular.module('pmh').controller('StartCtrl', [
    '$scope',
    '$window',
    '$q', function StartCtrl($scope, $window, $q) {
        'use strict';

        $scope.trip = {
            route: "PCT",
            startDate: new Date(),
            hoursPerDay: 8,
            pace: 2,
            paceUom: 'mph',
            timeOff: '1',
            timeOffUom: 'day',
            timeOffFrequency: 'section'
        };

    }]);
