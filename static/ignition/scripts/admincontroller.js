var redisApp = angular.module('admin', ['ui.bootstrap','ngCookies']);
var apiUrl = "https://nfk3jyz99k.execute-api.us-east-1.amazonaws.com/get-sesummit2020-creds-prod/v2?mfeemail=none%40mcafee.com&acckey=14653d20-3889-4187-9d82-ada2eebfd524&adminkey=2c2d4b56-80c6-4d68-8cc9-adf909da1edf"
var loadingdiv = $('#loading');
var resulttable = $('#resulttable');

function bodyOnLoad(){
    loadingdiv = $('#loading');
    resulttable = $('#resulttable');
    resulttable.hide();
}
/**
 * Constructor
 */
function RedisController() {}

RedisController.prototype.onUserStatus = function() {
    this.http_.get(apiUrl + "&admin=get_users")
            .success(angular.bind(this, function(data) {
                this.scope_.redisResponse = "Updated.";
            }));
};

redisApp.controller('AdminCtrl', function ($scope, $http, $location) {
        $scope.controller = new RedisController();
        $scope.controller.scope_ = $scope;
        $scope.controller.location_ = $location;
        $scope.controller.http_ = $http;

        loadingdiv.show();
        $scope.controller.http_.get(apiUrl + "&admin=get_user_table")
            .success(function(data) {
                console.log(data);
                $scope.user_table = data.user_table;
                loadingdiv.hide();
                resulttable.show();
            });

});
