/**
 * This file is the controller of ANL dashboard. It includes six controllers for
 * member, profile, news, achievements, activities and download module.
 *
 * @name      dashboard.controller.js
 * @summary   Controller file of dashboard
 * @link      /js/dashboard.controller.js
 * @since     2016-08-02
 * @author    Shilei Tian <tianshilei@sjtu.edu.cn>
 */

var dashboard = angular.module("dashboard", [
    "ui.router", "ui.bootstrap", "textAngular", "ngFileUpload", "ngCookies", "ngAnimate", "ngTouch"
]);

dashboard.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/partials/dashboard/login.html'
        })
        .state('profile', {
            url: 'profile',
            templateUrl: '../partials/dashboard/profile.html',
            controller: 'ProfileController',
            controllerAs: 'profileCtrl'
        })
        .state('member', {
            url: 'member',
            templateUrl: '../partials/dashboard/member.html',
            controller: 'MemberController',
            controllerAs: 'memberCtrl'
        })
        .state('news', {
            url: 'news',
            templateUrl: '../partials/dashboard/news.html',
            controller: 'NewsController',
            controllerAs: 'newsCtrl'
        })
        .state('achievement', {
            url: 'achievement',
            templateUrl: '../partials/dashboard/achievement.html',
            controller: 'AchievementController',
            controllerAs: 'achievementCtrl'
        })
        .state('activity', {
            url: 'activity',
            templateUrl: '../partials/dashboard/activity.html',
            controller: 'ActivityController',
            controllerAs: 'activityCtrl'
        })
        .state('files', {
            url: 'files',
            templateUrl: '../partials/dashboard/files.html',
            controller: "FilesController",
            controllerAs: 'filesCtrl'
        });
}]);

dashboard.factory('Active', [function () {
    var active = {};
    var current = 'profile';
    active.getStatus = function (sidebar) {
        if (current === sidebar)
            return 'active';
        else
            return '';
    };

    active.setActive = function (sidebar) {
        current = sidebar;
    };

    return active;
}]);

dashboard.factory('auth', ['$http', '$window', "$cookies", function ($http, $window, $cookies) {
    var auth = {};

    auth.logout = function () {
        $window.localStorage.removeItem('api-token');
        $cookies.remove("api-token");
    };

    auth.saveToken = function (token) {
        $window.localStorage['api-token'] = token;
        $cookies.put("api-token", token);
    };

    auth.getToken = function () {
        return $window.localStorage['api-token'];
    };

    auth.isLoggedin = function () {
        var token = auth.getToken();
        if (!token) {
            return false;
        }
        //var payload = JSON.parse($window.atob(token.split('.')[1]));
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

    auth.modifyPassword = function (oldPassword, newPassword) {
        var password = {
            oldPassword: oldPassword,
            newPassword: newPassword
        };
        return $http.post('/api/password', password, {headers: {'Authorization': 'Bearer ' + auth.getToken()}});
    };

    auth.currentUser = function () {
        if (!auth.isLoggedin()) {
            return null;
        } else {
            //return JSON.parse($window.atob(auth.getToken().split('.')[1]));
            return jwt_decode(auth.getToken());
        }
    };

    return auth;
}]);

// Main Controller
dashboard.controller("MainController", ['$state', 'auth', "Active", function ($state, auth, Active) {
    var self = this;

    var init = function () {
        if (!auth.isLoggedin()) {
            self.currentUser = null;
            $state.go('login');
        } else {
            self.currentUser = auth.currentUser();
            $state.go('profile');
        }
    }();

    self.logout = function () {
        self.currentUser = null;
        auth.logout();
        $state.go('login');
    };

    self.closeAlert = function () {
        self.alert = null;
    };

    self.login = function (username, password) {
        auth.login(username, password).then(function (res) {
            self.currentUser = auth.currentUser();
            $state.go('profile');
        }, function (err) {
            console.error('login failed');
            console.error(err);
            self.alert = {
                type: 'danger',
                message: '登录失败！',
                detail: err.data["message"]
            };
        });
    };

    self.getStatus = function (state) {
        return Active.getStatus(state);
    };
}]);

// Profile controller
dashboard.controller('ProfileController', ['$http', '$state', 'auth', 'Active', 'Upload',
    function ($http, $state, auth, Active, Upload) {
        if (!auth.isLoggedin()) {
            return $state.go('login');
        }
        Active.setActive('profile');

        var self = this;

        self.dateOptions = {
            // dateDisabled: disabled,
            formatYear: "yyyy",
            maxDate: new Date(2099, 12, 31),
            minDate: new Date(1970, 1, 1),
            startingDay: 1
        };

        self.openPublicationDatePicker = function () {
            self.popupPublicationDatePicker = true;
        };

        self.openAwardDatePicker = function () {
            self.popupAwardDatePicker = true;
        };

        self.openEducationStartDatePicker = function () {
            self.popupEducationStartDatePicker = true;
        };

        self.openEducationEndDatePicker = function () {
            self.popupEducationEndDatePicker = true;
        };

        self.closeAlert = function () {
            self.alert = null;
        };

        self.showPaperModal = function () {
            self.newPaper = {};
            self.newPaper.date = new Date();
            self.newPaper.type = 0;
            $("#add-paper").modal("show");
        };

        self.showAwardModal = function () {
            self.newAward = {};
            self.newAward.date = new Date();
            $("#add-award").modal("show");
        };

        self.showEducationModal = function () {
            self.newEducation = {};
            self.newEducation.start = new Date();
            self.newEducation.end = new Date();
            self.newEducation.type = 0;
            $("#add-education").modal("show");
        };

        // Init the user profile data
        function getProfile() {
            $http.get('/api/profile', {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.user = res.data;
                }, function (err) {
                    console.error('Failed to fetch the user profile.');
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '获取用户资料失败!'
                    };
                });
        }

        getProfile();

        // Set new avatar
        self.setNewAvatar = function (file, invalidFile) {
            if (file) {
                self.newAvatar = file;
            }
        };

        // Upload the avatar
        self.uploadAvatar = function () {
            if (self.newAvatar) {
                Upload.upload({
                    url: '/api/avatar',
                    headers: {'Authorization': 'Bearer ' + auth.getToken()},
                    data: {avatar: self.newAvatar}
                }).then(function (res) {
                    self.user.photo = res.data['photo'];
                    self.alert = {
                        type: 'success',
                        message: '个人照片上传成功!'
                    };
                    self.newAvatar = null;
                }, function (err) {
                    console.error("Failed to upload the avatar.");
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '个人照片上传失败!'
                    };
                });
            }
        };

        // Update the profile
        self.saveChanges = function () {
            $http.put('/api/profile', {
                'introduction': self.user.introduction,
                'name': self.user.name,
                'name_en': self.user.name_en,
                'email': self.user.email,
                'homepage': self.user.homepage,
                'interests': self.user.interests
            }, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.alert = {
                        type: 'success',
                        message: '更新成功!'
                    };
                }, function (err) {
                    console.error("Failed to update the user profile.");
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '更新失败!'
                    };
                });
        };

        // Add new paper
        self.addPaper = function () {
            $http.post("/api/publication", self.newPaper, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    getProfile();
                    self.newPaper = {};
                    $("#add-paper").modal("hide");
                    self.alert = {
                        type: "success",
                        message: '添加论文成功!',
                        detail: null
                    };
                }, function (err) {
                    console.error("Failed to add the publication.");
                    console.error(err);
                    self.alert = {
                        type: "danger",
                        message: '添加论文失败!'
                    };
                });
        };

        // Delete paper
        self.removePaper = function (index) {
            var paperID = self.user.publications[index]._id;
            $http.delete('/api/publication?id=' + paperID, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.user.publications.splice(index, 1);
                    self.alert = {
                        type: "success",
                        message: '删除论文成功!',
                        detail: null
                    };
                }, function (err) {
                    console.error("Failed to delete the publication.");
                    console.error(err);
                    self.alert = {
                        type: "danger",
                        message: '删除论文失败!'
                    };
                });
        };

        // Add a new award
        self.addAward = function () {
            $http.post("/api/award", self.newAward, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    getProfile();
                    self.newAward = {};
                    $("#add-award").modal("hide");
                    self.alert = {
                        type: "success",
                        message: '添加奖项成功!'
                    };
                }, function (err) {
                    console.error("Failed to add the award.");
                    console.error(err);
                    self.alert = {
                        type: "danger",
                        message: '添加奖项失败!'
                    };
                });
        };

        // Delete an award
        self.removeAward = function (index) {
            var awardID = self.user.awards[index]._id;
            $http.delete('/api/award?id=' + awardID, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.user.awards.splice(index, 1);
                    self.alert = {
                        type: "success",
                        message: '删除奖项成功!'
                    };
                }, function (err) {
                    console.error("Failed to delete the award.");
                    console.error(err);
                    self.alert = {
                        type: "danger",
                        message: '删除奖项失败!'
                    };
                });
        };

        // Add education experience
        self.addEducation = function () {
            $http.post("/api/education", self.newEducation, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    getProfile();
                    self.newEducation = null;
                    $("#add-education").modal("hide");
                    self.alert = {
                        type: "success",
                        message: '添加教育经历成功!',
                        detail: null
                    };
                }, function (err) {
                    console.error("Failed to add the education experience.");
                    console.error(err);
                    self.alert = {
                        type: "danger",
                        message: '添加教育经历失败!'
                    };
                });
        };

        // Delete education experience
        self.removeEducation = function (index) {
            var educationID = self.user.educations[index]._id;
            $http.delete("/api/education?id=" + educationID, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.user.educations.splice(index, 1);
                    self.alert = {
                        type: "success",
                        message: '删除教育经历成功!'
                    };
                }, function (err) {
                    console.error("Failed to delete the education.");
                    console.error(err);
                    self.alert = {
                        type: "danger",
                        message: '删除教育经历失败!'
                    };
                });
        };

        // 修改密码
        self.modifyPassword = function () {
            if (self.password.new != self.password.confirm) {
                alert('两次输入的密码不一致');
                return;
            }
            auth.modifyPassword(self.password.old, self.password.new).then(function (res) {
                alert('修改成功');
            }, function (err) {
                console.error(err);
                alert('密码修改失败，请打开控制台查看错误信息。');
            });
            self.password = null;
        };
    }]);

// Member controller
dashboard.controller('MemberController', ['$http', '$state', 'auth', 'Active', function ($http, $state, auth, Active) {
    var self = this;
    self.ROLE = ['本科生', '硕士', '博士', '教师'];

    Active.setActive('member');

    if (!auth.isLoggedin()) {
        return $state.go('login');
    }

    function initUsers() {
        // Retrieve the data of students
        $http.get('/api/user?category=student', {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
            .then(function (res) {
                self.users = res.data;
            }, function (err) {
                console.error('获取用户数据失败');
                console.error(err);
                self.alert = {
                    type: 'danger',
                    message: '获取用户数据失败'
                };
            });

        // Retrieve the data of supervisors
        $http.get('/api/user?category=supervisor', {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
            .then(function (res) {
                self.supervisors = res.data;
            }, function (err) {
                console.error('获取教师列表失败');
                console.error(err);
                self.alert = {
                    type: 'danger',
                    message: '获取教师列表失败'
                };
            });
    }

    function initGroups() {
        $http.get('/api/group', {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
            .then(function (res) {
                self.groups = res.data;
            }, function (err) {
                console.error(err);
            });
    }

    var initData = function () {
        self.groupsSelection = {};
        self.userEditing = null;

        initUsers();
        initGroups();
    }();

    self.closeAlert = function () {
        self.alert = null;
    };

    self.toggleAddNewUserModal = function () {
        self.newUser = {
            username: "",
            password: "",
            name: "",
            name_en: "",
            admin: false,
            role: 0,
            graduate: false
        };
        $("#add-user").modal("show");
    };

    // 添加用户
    self.addUser = function () {
        // Update the group
        self.newUser.groups = [];
        for (var key in self.groupsSelection) {
            if (self.groupsSelection[key]) {
                self.newUser.groups.push(key);
            }
        }
        self.groupsSelection = {};
        $http.post('/api/user', self.newUser, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
            .then(function (res) {
                self.newUser._id = res.data['_id'];
                self.users.push(self.newUser);
                self.newUser = null;
                self.alert = {
                    type: 'success',
                    message: '添加用户成功!'
                };
                $("#add-user").modal("hide");
                initUsers();
            }, function (err) {
                console.error("Failed to add new user:");
                console.error(err);
                self.alert = {
                    type: 'danger',
                    message: '添加用户失败!'
                };
            });
    };

    // 重置密码
    // author: Luke
    self.resetPassword = function (user) {
        if (!confirm('确定要重置用户"' + user.name + '"的密码吗?')) {
            return;
        }
        $http.delete('/api/password?id=' + user._id, {headers: {
            'Authorization': 'Bearer ' + auth.getToken()
        }}).then(function (res) {
            self.alert = {
                type: 'success',
                message: '用户"' + user.name + '"的密码已重置为123456。'
            };
        }, function (err) {
            self.alert = {
                type: 'danger',
                message: '用户密码重置失败!'
            };
        })

        //     }, function (err) {
        //         self.alert = {
        //             type: 'danger',
        //             message: '删除用户失败!'
        //         };
        //     });
    };

    // 删除用户
    self.deleteUser = function (user) {
        if (!confirm('确定要删除用户"' + user.name + '"吗?')) {
            return;
        }
        $http.delete('/api/user?id=' + user._id, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
            .then(function (res) {
                var index = self.users.indexOf(user);
                self.users.splice(index, 1);
                self.alert = {
                    type: 'success',
                    message: '删除用户成功!'
                };
            }, function (err) {
                self.alert = {
                    type: 'danger',
                    message: '删除用户失败!'
                };
            });
    };

    // 完成修改用户资料
    self.confirmEditUser = function () {
        "use strict";
        if (self.userEditing === null) {
            return;
        }
        self.userEditing.groups = [];
        for (var key in self.groupsSelection) {
            if (self.groupsSelection[key]) {
                self.userEditing.groups.push(key);
            }
        }
        $http.post('/api/user', self.userEditing, {
            headers: {'Authorization': 'Bearer ' + auth.getToken()}
        }).then(function (data) {
            self.alert = {
                type: 'success',
                message: '更改用户资料成功!',
                detail: null
            };
            $("#edit-user").modal("hide");
            initUsers();
        }, function (err) {
            console.error(err);
            self.alert = {
                type: 'danger',
                message: '更改用户资料失败!'
            };
        });
    };

    // 修改用户
    self.editUser = function (user) {
        self.userEditing = user;
        $("#edit-user").modal("show");
        self.groupsSelection = {};
        self.userEditing.groups.forEach(function (t) {
            "use strict";
            self.groupsSelection[t._id] = true;
        });
    };

    // 添加分组
    self.addGroup = function () {
        console.log(self.newGroup);
        $http.post('/api/group?id=' + auth.currentUser().id, self.newGroup, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
            .then(function (res) {
                self.newGroup = null;
                self.alert = {
                    type: 'success',
                    message: '添加分组成功!',
                    detail: null
                };
                initGroups();
            }, function (err) {
                console.log('添加分组失败，错误信息：');
                console.log(err);
                self.alert = {
                    type: 'danger',
                    message: '添加分组失败!'
                };
            });
    };

    // 删除分组
    self.deleteGroup = function (group) {
        if (!confirm('确定要删除分组"' + group.name + '"吗?')) {
            return;
        }
        $http.delete('/api/group?id=' + group._id, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
            .then(function (res) {
                var index = self.groups.indexOf(group);
                self.groups.splice(index, 1);
                self.alert = {
                    type: 'success',
                    message: '删除分组成功!'
                };
            });
    };

    // 修改分组
    self.editGroup = function (group) {
        self.groupEditing = group;
        $("#edit-group").modal("show");
    };

    // 完成修改分组
    self.finishEditingGroup = function () {
        if (self.groupEditing === null) {
            return;
        }
        console.info(self.groupEditing);
        $http.post('/api/group', self.groupEditing, {
            headers: {'Authorization': 'Bearer ' + auth.getToken()}
        }).then(function (data) {
            self.editingGroup = null;
            $("#edit-group").modal("hide");
            self.alert = {
                type: 'success',
                message: '修改分组成功!',
                detail: null
            };
            initGroups();
        }, function (err) {
            console.error('Failed to update the group information.');
            console.error(err);
            self.alert = {
                type: 'danger',
                message: '更改分组失败!'
            };
        });
    };
}]);

// News controller
dashboard.controller('NewsController', ['$http', '$state', 'Active', 'Upload', 'auth',
    function ($http, $state, Active, Upload, auth) {
        Active.setActive('news');
        var self = this;

        function init() {
            self.newNews = {};
            self.newsEditing = {};
            $http.get('/api/news', {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.newsList = res.data;
                }, function (err) {
                    console.error("Failed to fetch news list.");
                    console.error(err);
                });
        }

        init();

        if (!auth.isLoggedin()) {
            return $state.go('login');
        }

        self.editNews = function (id) {
            $http.get("/api/news?id=" + id, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.newsEditing = res.data;
                    $("#edit-news").modal("show");
                }, function (err) {
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '无法获取新闻内容'
                    }
                });
        };

        self.addNews = function () {
            self.newNews.date = Date.now();
            $http.post('/api/news', self.newNews, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    init();
                    $('#add-news').modal('hide');
                    self.alert = {
                        type: 'success',
                        message: '添加新闻成功!'
                    };
                }, function (err) {
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '添加新闻失败!'
                    }
                });
        };

        self.confirmEdit = function () {
            $http.post('/api/news', self.newsEditing, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    init();
                    $('#edit-news').modal('hide');
                    self.alert = {
                        type: 'success',
                        message: '修改新闻成功!'
                    };
                }, function (err) {
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '修改新闻失败!'
                    }
                });
        };

        self.deleteNews = function (item) {
            if (!confirm('确定要删除新闻《' + item.title + '》吗?')) {
                return;
            }
            var index = self.newsList.indexOf(item);
            $http.delete('/api/news?id=' + item._id, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.newsList.splice(index, 1);
                    self.alert = {
                        type: 'success',
                        message: '删除成功!'
                    }
                }, function (err) {
                    console.log(err);
                    self.alert = {
                        type: 'danger',
                        message: '删除失败!'
                    }
                });
        };

        self.deleteImage = function (img) {
            $http.delete('/api/image?id=' + img._id, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    var index = self.images.indexOf(img);
                    self.images.splice(index, 1);
                    self.alert = {
                        type: 'success',
                        message: '图片删除成功!'
                    };
                }, function (err) {
                    self.alert = {
                        type: 'danger',
                        message: '图片删除失败!'
                    };
                });
        };

        function uploadImages(images, cb) {
            if (images.length) {
                Upload.upload({
                    url: '/api/image',
                    headers: {'Authorization': 'Bearer ' + auth.getToken()},
                    arrayKey: '',
                    data: {images: images}
                }).then(function (res) {
                    return cb(null, res.data);
                }, function (err) {
                    return cb(err, null);
                });
            }
        }

        self.addImagesNew = function (images) {
            if (!self.newNews.content) {
                self.newNews.content = "";
            }
            uploadImages(images, function (err, images) {
                if (err) {
                    self.alert = {
                        type: 'danger',
                        message: '图片上传失败!'
                    };
                } else {
                    images.forEach(function (path) {
                        self.newNews.content += "\n<img src='" + path + "'>\n";
                    });
                }
            });
        };

        self.addImagesEdit = function (images) {
            if (!self.newsEditing.content) {
                self.newsEditing.content = "";
            }
            uploadImages(images, function (err, images) {
                if (err) {
                    self.alert = {
                        type: 'danger',
                        message: '图片上传失败!'
                    };
                } else {
                    images.forEach(function (path) {
                        self.newsEditing.content += "\n<img src='" + path + "'>\n";
                    });
                }
            });
        };

        self.closeAlert = function () {
            self.alert = null;
        };
    }]);

// Achievement controller
dashboard.controller('AchievementController', ['$http', '$state', 'auth', 'Active', 'Upload',
    function ($http, $state, auth, Active, Upload) {
        if (!auth.isLoggedin()) {
            return $state.go('login');
        }
        Active.setActive('achievement');

        var self = this;
        self.alert = null;
        self.achievements = [];

        function uploadImages(images, cb) {
            if (images.length) {
                Upload.upload({
                    url: '/api/image',
                    headers: {'Authorization': 'Bearer ' + auth.getToken()},
                    arrayKey: '',
                    data: {images: images}
                }).then(function (res) {
                    return cb(null, res.data);
                }, function (err) {
                    return cb(err, null);
                });
            }
        }

        self.addImagesNew = function (images) {
            if (!self.newAchievement.content) {
                self.newAchievement.content = "";
            }
            uploadImages(images, function (err, images) {
                if (err) {
                    self.alert = {
                        type: 'danger',
                        message: '图片上传失败!'
                    };
                } else {
                    images.forEach(function (path) {
                        self.newAchievement.content += "\n<img src='" + path + "'>\n";
                    });
                }
            });
        };

        self.addImagesEdit = function (images) {
            if (!self.achievementEditing.content) {
                self.achievementEditing.content = "";
            }
            uploadImages(images, function (err, images) {
                if (err) {
                    self.alert = {
                        type: 'danger',
                        message: '图片上传失败!'
                    };
                } else {
                    images.forEach(function (path) {
                        self.achievementEditing.content += "\n<img src='" + path + "'>\n";
                    });
                }
            });
        };

        self.addAchievement = function () {
            self.newAchievement.date = Date.now();
            $http.post('/api/achievement', self.newAchievement, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    init();
                    $("$add-achievement").modal("hide");
                    self.alert = {
                        type: 'success',
                        message: '添加成功!',
                        detail: null
                    };
                }, function (err) {
                    self.alert = {
                        type: 'danger',
                        message: '添加失败!'
                    }
                });
        };

        self.editAchievement = function (id) {
            $http.get("/api/achievement?id=" + id, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.achievementEditing = res.data;
                    $("#edit-achievement").modal("show");
                }, function (err) {
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '无法获取成果内容'
                    }
                });
        };

        self.confirmEdit = function () {
            $http.post('/api/achievement', self.achievementEditing, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    init();
                    $('#edit-achievement').modal('hide');
                    self.alert = {
                        type: 'success',
                        message: '修改新闻成功!'
                    };
                }, function (err) {
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '修改新闻失败!'
                    }
                });
        };

        self.deleteAchievement = function (item) {
            if (!confirm('确定要删除成果"' + item.title + '"吗?')) {
                return;
            }
            $http.delete('/api/achievement?id=' + item._id, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.alert = {
                        type: 'success',
                        message: '删除成功!'
                    };
                    var index = self.achievements.indexOf(item);
                    self.achievements.splice(index, 1);
                }, function (err) {
                    self.alert = {
                        type: 'danger',
                        message: '删除失败!'
                    };
                });
        };

        self.closeAlert = function () {
            self.alert = null;
        };

        function init() {
            self.newAchievement = {};
            self.achievementEditing = {};
            $http.get('/api/achievement', {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.achievements = res.data;
                }, function (err) {
                    console.error("Failed to fetch the achievements list.");
                    console.error(err);
                });
        }

        init();
    }]);

// Activity controller
dashboard.controller('ActivityController', ['$http', '$state', 'auth', 'Active', 'Upload', function ($http, $state, auth, Active, Upload) {
    if (!auth.isLoggedin()) {
        return $state.go('login');
    }
    Active.setActive('activity');

    var self = this;
    self.alert = null;

    self.closeAlert = function () {
        self.alert = null;
    };

    function initBlogList() {
        "use strict";
        $http.get('/api/blog', {headers: {'Authorization': 'Bearer ' + auth.getToken()}}).then(function (res) {
            self.activities = res.data;
        }, function (err) {
            console.error("Failed to retrieve the blogs");
        });
    }

    function initGroupList() {
        $http.get('/api/group?uid=' + auth.currentUser().id, {
            headers: {'Authorization': 'Bearer ' + auth.getToken()}
        }).then(function (res) {
            self.groups = res.data;
        }, function (err) {
            console.error(err);
        });
    }

    function init() {
        self.currentUser = {};
        self.currentUser.admin = auth.currentUser().admin;
        initBlogList();
        initGroupList();
    }

    init();

    self.showAddActivityWindow = function () {
        self.newBlog = {};
        self.newBlog.attachments = [];
        $("#add-activity").modal("show");
    };

    self.addActivity = function () {
        var attachments = self.newBlog.attachments;
        delete self.newBlog.attachments;
        Upload.upload({
            url: "/api/blog",
            headers: {'Authorization': 'Bearer ' + auth.getToken()},
            data: {
                blog: self.newBlog,
                attachments: attachments
            },
            arrayKey: ""
        }).then(function (res) {
            init();
            self.alert = {
                type: 'success',
                message: '添加活动成功!'
            };
            self.newBlog = {};
            $("#add-activity").modal("hide");
        }, function (err) {
            console.error("Failed to upload the activity.");
            console.error(err);
            self.alert = {
                type: 'danger',
                message: '添加活动失败!'
            };
        });
    };

    self.editActivity = function (blog) {
        $http.get("/api/blog?id=" + blog._id, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
            .then(function (res) {
                self.blogEditing = res.data;
                $("#edit-activity").modal("show");
            }, function (err) {
                console.error(err);
                self.alert = {
                    type: 'danger',
                    message: "无法获取活动信息"
                };
            });
    };

    self.addAttachmentsEditing = function (files) {
        files.forEach(function (file) {
            self.blogEditing.attachments.push(file);
        });
    };

    self.deleteAttachmentEditing = function (index) {
        $http.delete("/api/file?id=" + self.blogEditing.attachments[index]._id, {
            headers: {'Authorization': 'Bearer ' + auth.getToken()}
        }).then(function (res) {
            self.blogEditing.attachments.splice(index, 1);
        }, function (err) {
            console.error(err);
        });
    };

    self.confirmEdit = function () {
        var attachments = self.blogEditing.attachments;
        delete self.blogEditing.attachments;
        Upload.upload({
            url: "/api/blog",
            headers: {'Authorization': 'Bearer ' + auth.getToken()},
            data: {
                _id: self.blogEditing._id,
                blog: self.blogEditing,
                attachments: attachments
            },
            arrayKey: ""
        }).then(function (res) {
            init();
            self.alert = {
                type: 'success',
                message: '修改活动成功!'
            };
            self.blogEditing = {};
            $("#edit-activity").modal("hide");
        }, function (err) {
            console.error("Failed to upload the activity.");
            console.error(err);
            self.alert = {
                type: 'danger',
                message: '修改活动失败!'
            };
        });
    };

    self.deleteActivity = function (item) {
        if (!confirm('确定要删除活动"' + item.title + '"吗?')) {
            return;
        }
        $http.delete('/api/blog?id=' + item._id, {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
            .then(function (res) {
                var index = self.activities.indexOf(item);
                self.activities.splice(index, 1);
                self.alert = {
                    type: 'success',
                    message: '删除活动成功!',
                    detail: null
                };
            }, function (err) {
                self.alert = {
                    type: 'danger',
                    message: '删除活动失败!'
                };
            });
    };

    self.addAttachments = function (files) {
        files.forEach(function (file) {
            self.newBlog.attachments.push(file)
        });
    };

    self.deleteAttachment = function (index) {
        "use strict";
        self.newBlog.attachments.splice(index, 1);
    }
}]);

// File controller
dashboard.controller('FilesController', ['$http', '$state', '$timeout', 'auth', 'Active', 'Upload',
    function ($http, $state, $timeout, auth, Active, Upload) {
        if (!auth.isLoggedin()) {
            return $state.go('login');
        }
        Active.setActive('files');

        var self = this;
        self.documents = [];
        self.alert = null;

        self.showAddFilesModal = function () {
            self.newFiles = [];
            $("#add-files").modal("show");
        };

        self.addFiles = function (files) {
            files.forEach(function (file) {
                self.newFiles.push({
                    name: file.name,
                    size: file.size,
                    file: file,
                    introduction: ""
                });
            });
        };

        self.deleteNewFile = function (index) {
            self.newFiles.splice(index, 1);
        };

        self.confirmUploadFiles = function () {
            "use strict";
            if (self.newFiles.length) {
                console.log(self.newFiles);
                var files = [], introductions = [];
                self.newFiles.forEach(function (t) {
                    files.push(t.file);
                    introductions.push(t.introduction);
                });
                console.log(files);
                console.log(introductions);
                Upload.upload({
                    url: "/api/doc",
                    headers: {'Authorization': 'Bearer ' + auth.getToken()},
                    data: {
                        information: introductions,
                        files: files
                    },
                    arrayKey: ""
                }).then(function (res) {
                    self.alert = {
                        type: 'success',
                        message: '资料上传成功!'
                    };
                    self.newFiles = [];
                    initDocs();
                    $("#add-files").modal("hide");
                }, function (err) {
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '资料上传失败!'
                    };
                });
            }
        };

        self.deleteFile = function (index) {
            $http.delete("/api/doc?id=" + self.documents[index]._id,
                {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    "use strict";
                    self.documents.splice(index, 1);
                    self.alert = {
                        type: 'success',
                        message: '文件删除成功!'
                    };
                }, function (err) {
                    "use strict";
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '文件删除失败!'
                    };
                });
        };

        self.showAddImageModal = function () {
            self.newImages = [];
            $("#add-image").modal("show");
        };

        self.addImages = function (files) {
            files.forEach(function (file) {
                self.newImages.push(file);
            });
        };

        self.deleteNewImage = function (index) {
            self.newImages.splice(index, 1);
        };

        self.uploadImages = function () {
            if (self.newImages.length) {
                Upload.upload({
                    url: '/api/carousel_image',
                    headers: {'Authorization': 'Bearer ' + auth.getToken()},
                    data: {images: self.newImages},
                    arrayKey: ""
                }).then(function (res) {
                    initImages();
                    self.alert = {
                        type: 'success',
                        message: '图片上传成功!'
                    };
                    $("#add-image").modal("hide");
                }, function (err) {
                    console.error("Failed to upload images.");
                    console.error(err);
                    self.alert = {
                        type: 'danger',
                        message: '图片上传失败!'
                    };
                });
            }
        };

        self.deleteImage = function (index) {
            $http.delete('/api/carousel_image?id=' + self.images[index]._id, {
                headers: {'Authorization': 'Bearer ' + auth.getToken()}
            }).then(function (res) {
                self.images.splice(index, 1);
                self.alert = {
                    type: 'success',
                    message: '图片删除成功!'
                };
            }, function (err) {
                console.error(err);
                self.alert = {
                    type: 'danger',
                    message: '图片删除失败!'
                };
            });
        };

        self.closeAlert = function () {
            self.alert = null;
        };

        function initImages() {
            $http.get('/api/carousel_image', {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.images = res.data;
                }, function (err) {
                    console.error("Error occurred when retrieving the images.");
                    console.error(err);
                });
        }

        function initDocs() {
            $http.get('/api/doc', {headers: {'Authorization': 'Bearer ' + auth.getToken()}})
                .then(function (res) {
                    self.documents = res.data;
                }, function (err) {
                    console.error("Error occurred when retrieving the docs.");
                    console.error(err);
                });
        }

        var init = function () {
            initImages();
            initDocs();
        }();
    }]);
