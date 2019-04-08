var anl = angular.module("anl_signup", ["ui.bootstrap"]);

anl.controller('SignupController', ["$window", "$http", function ($window, $http) {
    var self = this;
    
    self.alert = null;
    
    function init() {
        self.newUser = {
            username: "",
            password: "",
            confirmPassword: "",
            name: "",
            name_en: "",
            role: 0
        }
    }
    
    init();
    
    self.submit = function () {
        console.log(self.newUser);
        if (self.newUser.password !== self.newUser.confirmPassword) {
            self.alert = {
                type: "danger",
                message: "两次输入的密码不一致！"
            };
            return;
        }
        $http.post("/signup", self.newUser).then(function (res) {
            init();
            $window.location.replace("/");
        }, function (err) {
            console.error("Failed to sign up.");
            console.error(err);
            self.alert = {
                type: "danger",
                message: "注册失败！Failed: " + err.data.message
            };
        });
    };
    
    self.closeAlert = function () {
        self.alert = null;
    };
}]);