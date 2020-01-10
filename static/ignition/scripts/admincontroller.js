var redisApp = angular.module('redis', ['ui.bootstrap']);

/**
 * Constructor
 */
function RedisController() {}

RedisController.prototype.onUserStatus = function() {
    this.http_.get("guestbook.php?cmd=set&key=messages&value=" + value)
            .success(angular.bind(this, function(data) {
                this.scope_.redisResponse = "Updated.";
            }));
};

redisApp.controller('AdminCtrl', function ($scope, $http, $location) {
        $scope.controller = new RedisController();
        $scope.controller.scope_ = $scope;
        $scope.controller.location_ = $location;
        $scope.controller.http_ = $http;

        $scope.controller.http_.get("guestbook.php?cmd=getall")
            .success(function(data) {
                console.log(data);
                $scope.messages = data.messages;
                $scope.clienthost = data.clienthost;
            });
});
