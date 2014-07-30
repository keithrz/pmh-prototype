angular.module('pmh').controller('StartCtrl', [
    '$scope',
    '$window',
    '$q', function StartCtrl($scope, $window, $q) {
        'use strict';

        $scope.trip = {
            trail: "PCT",
            startDate: new Date(),
            hoursPerDay: 8,
            pace: 2,
            paceUom: 'mph',
            timeOff: '1',
            timeOffUom: 'day',
            timeOffFrequency: 'section'
        };

		$scope.startTrip = function() {
//			var trailSections = trailService.getSections($scope.trip.trail);
			var trailSections = $scope.getSections($scope.trip.trail);
			$scope.createTripSections(trailSections, $scope.trip)
		};

		$scope.createTripSections = function(trailSections, trip) {
			var tripDate = trip.startDate,
			    tripSections = [];
			
			forEach(trailSections, function(trailSection) {
				var tripSection = {};
				tripSection.name = trailSection.name;
				tripSection.startDate = tripDate;
				//todo convert pace using pace uom
				//todo don't multiply by hpd (and disable field) if pace uom is per day
				tripSection.days = trailSection.distance / (pace * hoursPerDay);
				//todo determine rounding precision for days
				tripDate += tripSection.days;
				tripSection.endDate = tripDate
				tripSections.push(tripSection);
			});
		};

		$scope.getSections = function(trail) {
			if(trail === 'PCT') {
				return [{
					{
						name: "Steven's Pass to Stehekin",
						distance: 100
					},{
						name: "Stehekin to Border",
						distance: 80
				}]
			}
		};
    }]);
