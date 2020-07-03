var redisApp = angular.module('admin', ['ui.bootstrap', 'ngCookies']);
var apiUrl = "https://nfk3jyz99k.execute-api.us-east-1.amazonaws.com/get-sesummit2020-creds-prod/v2?mfeemail=none%40mcafee.com&acckey=14653d20-3889-4187-9d82-ada2eebfd524"
var loadingdiv;
var resulttable;


$('#saveadminkey').on('click', function (e) {
    Cookies.set('adminkey', $('#adminkeyin').val(), {expires: 60});
    if (Cookies.get('adminkey')) {
        $('#adminkeydiv').hide();
    } else {
        $('#adminkeydiv').show();
    }
})

function bodyOnLoad() {
    loadingdiv = $('#loading');
    resulttable = $('#resulttable');
    resulttable.hide();
    if (Cookies.get('adminkey')) {
        $('#adminkeydiv').hide();
    } else {
        $('#adminkeydiv').show();
    }
}

/**
 * Constructor
 */
function RedisController() {
}

RedisController.prototype.onUserStatus = function () {
    this.http_.get(apiUrl + "&admin=get_user_table")
        .success(function (data) {
            console.log(data);
            this.user_table = data.user_table;
            this.update_time = data.update_time;
            loadingdiv.hide();
            resulttable.show();
        })
        .error(function (resp) {
            console.log(resp);
            $('#adminkeydiv').show();
            loadingdiv[0].innerText = "ERROR!";
        });
};

RedisController.prototype.onGetJenkins = function () {
    this.http_.get(apiUrl + "&admin=get_jenkins")
        .success(function (data) {
            console.log(data);
            this.jenkins = data.jenkins;
            loadingdiv.hide();
            resulttable.show();
        })
        .error(function (resp) {
            console.log(resp);
            $('#adminkeydiv').show();
            loadingdiv[0].innerText = "ERROR!";
        });
};

redisApp.controller('LabTenantStats', function ($scope, $http, $location) {
    $scope.controller = new RedisController();
    $scope.controller.scope_ = $scope;
    $scope.controller.location_ = $location;
    $scope.controller.http_ = $http;
    $scope.orderByField = 'codeword';
    $scope.reverseSort = false;

    loadingdiv = $('#loading');
    resulttable = $('#resulttable');
    loadingdiv.show();
    apiUrl = apiUrl + "&adminkey=" + Cookies.get('adminkey');

    // get jenkins data
    $scope.controller.http_.get(apiUrl + "&admin=get_mvc_lab_tenants")
        .success(function (data) {
            console.log(data);
            $scope.labtenants = data.labtenants;
        })
        .error(function (resp) {
            console.log(resp);
        });

});
