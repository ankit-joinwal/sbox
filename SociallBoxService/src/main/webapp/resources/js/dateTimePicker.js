var app = angular.module('DateTime', ['ui.bootstrap', 'ui.bootstrap.datetimepicker']);

app.controller('DateTimeController', ['$scope', function($scope) {

    var that = this;


    this.dates = {
        startDate: new Date(),
    	endDate: new Date()
    };

    this.open = {
        startDate:false,
        endDate: false
    };

    // Disable today selection
    this.disabled = function(date, mode) {
        return (mode === 'day' && (new Date().toDateString() == date.toDateString()));
    };

    this.dateOptions = {
        showWeeks: false,
        startingDay: 1
    };

    this.timeOptions = {
        readonlyInput: false,
        showMeridian: false
    };

    this.dateModeOptions = {
        minMode: 'year',
        maxMode: 'year'
    };

    this.openCalendar = function(e, date) {
        that.open[date] = true;
    };

    // watch date4 and date5 to calculate difference
    var unwatch = $scope.$watch(function() {
        return that.dates;
    }, function() {
        if (that.dates.date4 && that.dates.date5) {
            var diff = that.dates.date4.getTime() - that.dates.date5.getTime();
            that.dayRange = Math.round(Math.abs(diff/(1000*60*60*24)))
        } else {
            that.dayRange = 'n/a';
        }
    }, true);

    $scope.$on('$destroy', function() {
        unwatch();
    });
}]);