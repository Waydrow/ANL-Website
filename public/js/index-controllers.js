/**
 * This file is the controller of ANL homepage. It includes six controllers for
 * home, member, news, achievements, activities, contact and download module.
 * Besides, there is also an module `auth` for all access control.
 *
 * @name      controller.js
 * @summary   Controller file of all contents on homepage
 * @link      /js/controller.js
 * @since     2016-08-02
 * @author    Shilei Tian <tianshilei@sjtu.edu.cn>
 */

var anl = angular.module('anl', ["ngCookies"]);

anl.controller('HeaderController', ['auth', '$window', function (auth, $window) {
    var self = this;
    self.currentUser = auth.currentUser();
    
    self.showLoginModal = function () {
        self.user = {};
        self.alert = null;
        $("#login").modal("show");
    };
    
    self.login = function () {
        auth.login(self.user.username, self.user.password).then(function (res) {
            self.alert = null;
            $window.location.reload();
        }, function (err) {
            console.error("loin failed");
            console.error(err);
            self.alert = 1;
        });
    };
    
    self.logout = function () {
        auth.logout();
        $window.location.reload();
    };
    
    self.closeAlert = function () {
        self.alert = null;
    };
}]);

anl.factory('auth', ['$http', '$window', "$cookies", function ($http, $window, $cookies) {
    var auth = {};
    
    auth.saveToken = function (token) {
        $window.localStorage['api-token'] = token;
    };
    
    auth.getToken = function () {
        return $window.localStorage['api-token'];
    };
    
    auth.isLoggedin = function () {
        var token = auth.getToken();
        if (!token) {
            return false;
        }
        // var payload = JSON.parse($window.atob(token.split('.')[1]));
        var payload = jwt_decode(token);
        var expireDate = new Date(payload.expire);
        if (expireDate < new Date(Date.now())) {
            auth.logout();
            return false;
        } else {
            return true;
        }
    };
    
    auth.login = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return $http.post('/login', user).then(function (res) {
            auth.saveToken(res.data['token']);
        }, function (err) {
            throw err;
        });
    };
    
    auth.currentUser = function () {
        if (!auth.isLoggedin()) {
            return null;
        } else {
            //return JSON.parse(decodeURIComponent(escape($window.atob(auth.getToken().split('.')[1]))));
            return jwt_decode(auth.getToken());
        }
    };
    
    auth.logout = function () {
        $window.localStorage.removeItem('api-token');
        $cookies.remove("api-token");
    };
    
    return auth;
}]);
