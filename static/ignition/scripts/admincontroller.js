var redisApp = angular.module('admin', ['ui.bootstrap', 'ngCookies']);
var apiUrl = "https://nfk3jyz99k.execute-api.us-east-1.amazonaws.com/get-sesummit2020-creds-prod/v2?mfeemail=none%40mcafee.com&acckey=14653d20-3889-4187-9d82-ada2eebfd524"
var loadingdiv;
var resulttable;

function resetjenkins(mfeemail){
    console.log("Resetting jenkins for user: " + mfeemail);
    url = "https://nfk3jyz99k.execute-api.us-east-1.amazonaws.com/get-sesummit2020-creds-prod/v2?"
    url += "acckey=" + Cookies.get('adminkey')
    url += "&resetjenkins=yes&mfeemail=" + encodeURI(mfeemail)
    window.open(url);

}

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

redisApp.controller('AdminCtrl', function ($scope, $http, $location) {
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
    $scope.controller.http_.get(apiUrl + "&admin=get_jenkins")
        .success(function (data) {
            console.log(data);
            $scope.jenkins = data.jenkins;
        })
        .error(function (resp) {
            console.log(resp);
        });

    // get cloud9 data
    $scope.controller.http_.get(apiUrl + "&admin=get_cloud9")
        .success(function (data) {
            $scope.cloud9 = data.cloud9;
            console.log($scope.cloud9 );
        })
        .error(function (resp) {
            console.log(resp);
        });


    // get eks data
    $scope.controller.http_.get(apiUrl + "&admin=get_eks")
        .success(function (data) {
            $scope.eks = data.eks;
            console.log($scope.eks );
        })
        .error(function (resp) {
            console.log(resp);
        });

    // get MVC data
    $scope.controller.http_.get(apiUrl + "&admin=get_mvc")
        .success(function (data) {
            console.log(data);
            $scope.mvc = data.mvc;
        })
        .error(function (resp) {
            console.log(resp);
        });

    // get CodeCommit data
    $scope.controller.http_.get(apiUrl + "&admin=get_cc")
        .success(function (data) {
            console.log(data);
            $scope.cc = data.cc;
        })
        .error(function (resp) {
            console.log(resp);
        });

    // get CloudFormation data
    $scope.controller.http_.get(apiUrl + "&admin=get_cf")
        .success(function (data) {
            $scope.cf = data.cf;
            console.log($scope.cf);
        })
        .error(function (resp) {
            console.log(resp);
        });

    // get user table
    $scope.controller.http_.get(apiUrl + "&admin=get_user_table")
        .success(function (data) {
            console.log(data);
            $scope.user_table = data.user_table;
            $scope.update_time = data.update_time;
            loadingdiv.hide();
            resulttable.show();
        })
        .error(function (resp) {
            console.log(resp);
            $('#adminkeydiv').show();
            loadingdiv[0].innerText = "ERROR!";
        });

});
