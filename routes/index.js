/**
 * This file is the route control of homepage. It is for zh-cn and eng.
 * Note: All the routes responsed by this file should not support auth.
 *
 * @name      index.js
 * @summary   Route control of homepage
 * @link      /route/index.js
 * @since     2016-08-02
 * @author    Shilei Tian <tianshilei@sjtu.edu.cn>
 */
    
    // 3rd party modules
var express = require("express");
var moment = require('moment');
var router = express.Router();
var async = require("async");
var jwt = require('jsonwebtoken');

// Model
var Achievement = require("../models/achievement");
var User = require("../models/user");
var News = require("../models/news");
var Blog = require("../models/blog");
var Image = require("../models/image");
var Document = require("../models/document");
var File = require("../models/file");
var Group = require('../models/group');

const path = require('path');
const FILE_PATH = path.join(__dirname, '..');

// Print error info and write response
function unknownError(err, next) {
    console.error(err);
    return next({status: 500});
}

router.get("/", function (req, res, next) {
    "use strict";
    async.parallel([
        function (cb) {
            News.find({}, "title _id date", {
                limit: 3,
                sort: {visit_count: -1}
            }).exec(function (err, news) {
                if (err) {
                    console.error("Failed to retrieve the top news.");
                    cb(err, []);
                } else {
                    cb(null, news);
                }
            });
        },
        function (cb) {
            Image.find({}, "path date", {
                limit: 3,
                sort: {date: -1}
            }).exec(function (err, images) {
                if (err) {
                    console.error("Failed to retrieve the images of homepage.");
                    cb(err, []);
                } else {
                    cb(null, images);
                }
            });
        },
        function (cb) {
            Achievement.find({}, "title _id date", {
                limit: 3,
                sort: {visit_count: -1}
            }).exec(function (err, achievements) {
                if (err) {
                    console.error("Failed to retrieve the top news.");
                    cb(err, []);
                } else {
                    cb(null, achievements);
                }
            });
        }, function (cb) {
            Blog.find({}, "title _id date", {
                limit: 3,
                sort: {date: -1}
            }).exec(function (err, blogs) {
                if (err) {
                    console.error("Failed to retrieve the latest blogs.");
                    cb(err, []);
                } else {
                    cb(null, blogs);
                }
            });
        }
    ], function (err, results) {
        if (err) {
            console.error("Error occurred when query news and images.");
            console.error(err);
        }
        return res.render("index", {
            name: "home",
            topNews: results[0],
            slides: results[1],
            achievements: results[2],
            latestBlogs: results[3],
            moment: moment
        });
    });
});

router.get("/introduction", function (req, res, next) {
    "use strict";
    res.render("index", {name: "introduction"});
});

router.get("/member", function (req, res, next) {
    "use strict";
    async.parallel([
        function (cb) {
            User.find({role: 3}, 'name photo interests homepage', function (err, users) {
                if (err) {
                    console.error("Failed to retrieve the supervisor list.");
                    cb(err, []);
                } else {
                    cb(null, users);
                }
            });
        },
        function (cb) {
            User.find({role: {$ne: 3}}, "name photo supervisor homepage graduate role")
                .populate("supervisor", "name")
                .exec(function (err, users) {
                    if (err) {
                        console.error("Failed to retrieve the supervisor list.");
                        cb(err, []);
                    } else {
                        cb(null, users);
                    }
                });
        }
    ], function (err, results) {
        if (err) {
            console.error("Error occurred when query users.");
            console.error(err);
        } else {
            return res.render("index", {
                name: "member",
                teachers: results[0],
                students: results[1]
            });
        }
    });
});

router.get("/news", function (req, res, next) {
    "use strict";
    if (req.query["id"] === undefined) {
        News.find({}, "title _id date visit_count", {sort: {date: -1}}, function (err, news) {
            if (err) {
                console.error(err);
                return unknownError(err, next);
            }
            return res.render("index", {
                name: "news",
                news: news,
                moment: moment
            });
        });
    } else {
        News.findOneAndUpdate({_id: req.query["id"]}, {$inc: {visit_count: 1}}, "title date content visit_count", function (err, news) {
            if (err) {
                console.error("Failed to fetch the news.");
                return unknownError(err, next);
            } else {
                return res.render("index", {
                    name: "news_page",
                    news: news,
                    moment: moment
                });
            }
        });
    }
});

router.get("/achievement", function (req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        Achievement.find({}, "title _id date visit_count", {sort: {date: -1}}, function (err, achievements) {
            if (err) {
                console.error(err);
                return unknownError(err, next);
            } else {
                return res.render("index", {
                    name: "achievement",
                    achievements: achievements,
                    moment: moment
                });
            }
        });
    } else {
        Achievement.findOneAndUpdate({_id: req.query["id"]}, {$inc: {visit_count: 1}}, "title date content visit_count", function (err, achievement) {
            if (err) {
                console.error(err);
                return unknownError(err, next);
            } else {
                return res.render("index", {
                    name: "achievement_page",
                    achievement: achievement,
                    moment: moment
                });
            }
        });
    }
});

router.get("/activity", function (req, res, next) {
    "use strict";
    if (req.query["id"] === undefined) {
        var criteria = {};
        if (req.query.gid !== undefined) {
            criteria.group = req.query.gid;
        }
        async.parallel([
            function (cb) {
                Blog.find(criteria, "title _id date group", {sort: {date: -1}}).populate("group", "name").exec(function (err, blogs) {
                    if (err) {
                        console.error("Failed to retrieve the blog list.");
                        cb(err, []);
                    } else {
                        cb(null, blogs);
                    }
                });
            },
            function (cb) {
                Group.find({}, function (err, gs) {
                    if (err) {
                        console.error("Failed to retrieve the groups.");
                        cb(err, []);
                    } else {
                        cb(null, gs);
                    }
                });
            }
        ], function (err, results) {
            if (err) {
                console.error("Failed to process the activity page.");
                return unknownError(err, next);
            } else {
                return res.render("index", {
                    name: "activity",
                    blogs: results[0],
                    groups: results[1],
                    moment: moment
                });
            }
        });
    } else {
        Blog.findById(req.query.id, "-_id -_v")
            .populate("attachments", "name")
            .populate("group", "name")
            .populate("author", "name")
            .exec(function (err, blog) {
            if (err) {
                console.error("Failed to retrieve the blog list.");
                return unknownError(err, next);
            } else {
                return res.render("index", {
                    name: "activity_page",
                    blog: blog,
                    moment: moment
                });
            }
        });
    }
});

router.get("/download", function (req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        Document.find({}).populate("uploader", "name").exec(function (err, docs) {
            if (err) {
                docs = [];
            }
            res.render("index", {
                name: "download",
                files: docs
            });
        });
    } else {
        Document.findById(req.query.id, function (err, file) {
            if (err) {
                console.error("Failed to query the file.");
                console.error(err);
                return unknownError(err, next);
            } else if (!file) {
                console.error("File not found.");
                return next("File not found.");
            } else {
                var tmppath = path.join(FILE_PATH, file.path);
                return res.download(tmppath, file.name);
            }
        });
    }
});

router.get("/dashboard", function (req, res, next) {
    "use strict";
    res.render("dashboard");
});

router.get("/en", function (req, res, next) {
    "use strict";
    async.parallel([
        function (cb) {
            News.find({}, "title_en _id date", {
                limit: 3,
                sort: {visit_count: -1}
            }).exec(function (err, news) {
                if (err) {
                    console.error("Failed to retrieve the top news.");
                    cb(err, []);
                } else {
                    cb(null, news);
                }
            });
        },
        function (cb) {
            Image.find({}, "path date", {
                limit: 3,
                sort: {date: -1}
            }).exec(function (err, images) {
                if (err) {
                    console.error("Failed to retrieve the images of homepage.");
                    cb(err, []);
                } else {
                    cb(null, images);
                }
            });
        },
        function (cb) {
            Achievement.find({}, "title_en _id date", {
                limit: 3,
                sort: {visit_count: -1}
            }).exec(function (err, achievements) {
                if (err) {
                    console.error("Failed to retrieve the top news.");
                    cb(err, []);
                } else {
                    cb(null, achievements);
                }
            });
        },
        function (cb) {
            Blog.find({}, "title _id date", {
                limit: 3,
                sort: {date: -1}
            }).exec(function (err, blogs) {
                if (err) {
                    console.error("Failed to retrieve the latest blogs.");
                    cb(err, []);
                } else {
                    cb(null, blogs);
                }
            });
        }
    ], function (err, results) {
        if (err) {
            console.error("Error occurred when query news and images.");
            console.error(err);
        }
        return res.render("index_en", {
            name: "home",
            topNews: results[0],
            slides: results[1],
            achievements: results[2],
            latestBlogs: results[3],
            moment: moment
        });
    });
});

router.get("/en/introduction", function (req, res, next) {
    "use strict";
    res.render("index_en", {name: "introduction"});
});

router.get("/en/member", function (req, res, next) {
    "use strict";
    async.parallel([
        function (cb) {
            User.find({role: 3}, 'name_en photo interests homepage', function (err, users) {
                if (err) {
                    console.error("Failed to retrieve the supervisor list.");
                    cb(err, []);
                } else {
                    cb(null, users);
                }
            });
        },
        function (cb) {
            User.find({role: {$ne: 3}}, "name_en photo supervisor homepage graduate role")
                .populate("supervisor", "name_en")
                .exec(function (err, users) {
                    if (err) {
                        console.error("Failed to retrieve the supervisor list.");
                        cb(err, []);
                    } else {
                        cb(null, users);
                    }
                });
        }
    ], function (err, results) {
        if (err) {
            console.error("Error occurred when query users.");
            console.error(err);
        } else {
            return res.render("index_en", {
                name: "member",
                teachers: results[0],
                students: results[1]
            });
        }
    });
});

router.get("/en/news", function (req, res, next) {
    "use strict";
    if (req.query["id"] === undefined) {
        News.find({}, "title_en _id date visit_count", {sort: {date: -1}}, function (err, news) {
            if (err) {
                console.error(err);
                return unknownError(err, next);
            }
            return res.render("index_en", {
                name: "news",
                news: news,
                moment: moment
            });
        });
    } else {
        News.findOneAndUpdate({_id: req.query["id"]}, {$inc: {visit_count: 1}}, "title date content visit_count", function (err, news) {
            if (err) {
                console.error("Failed to fetch the news.");
                return unknownError(err, next);
            } else {
                return res.render("index_en", {
                    name: "news_page",
                    news: news,
                    moment: moment
                });
            }
        });
    }
});

router.get("/en/achievement", function (req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        Achievement.find({}, "title_en _id date visit_count", {sort: {date: -1}}, function (err, achievements) {
            if (err) {
                console.error(err);
                return unknownError(err, next);
            } else {
                return res.render("index_en", {
                    name: "achievement",
                    achievements: achievements,
                    moment: moment
                });
            }
        });
    } else {
        Achievement.findOneAndUpdate({_id: req.query["id"]}, {$inc: {visit_count: 1}}, "title date content visit_count", function (err, achievement) {
            if (err) {
                console.error(err);
                return unknownError(err, next);
            } else {
                return res.render("index_en", {
                    name: "achievement_page",
                    achievement: achievement,
                    moment: moment
                });
            }
        });
    }
});

router.get("/en/activity", function (req, res, next) {
    "use strict";
    if (req.query["id"] === undefined) {
        var criteria = {};
        if (req.query.gid !== undefined) {
            criteria.group = req.query.gid;
        }
        async.parallel([
            function (cb) {
                Blog.find(criteria, "title _id date group", {sort: {date: -1}}).populate("group", "name").exec(function (err, blogs) {
                    if (err) {
                        console.error("Failed to retrieve the blog list.");
                        cb(err, []);
                    } else {
                        cb(null, blogs);
                    }
                });
            },
            function (cb) {
                Group.find({}, function (err, gs) {
                    if (err) {
                        console.error("Failed to retrieve the groups.");
                        cb(err, []);
                    } else {
                        cb(null, gs);
                    }
                });
            }
        ], function (err, results) {
            if (err) {
                console.error("Failed to process the activity page.");
                return unknownError(err, next);
            } else {
                return res.render("index_en", {
                    name: "activity",
                    blogs: results[0],
                    groups: results[1],
                    moment: moment
                });
            }
        });
    } else {
        Blog.findById(req.query.id, "-_id -_v")
            .populate("attachments", "name")
            .populate("group", "name")
            .populate("author", "name_en")
            .exec(function (err, blog) {
                if (err) {
                    console.error("Failed to retrieve the blog list.");
                    return unknownError(err, next);
                } else {
                    return res.render("index_en", {
                        name: "activity_page",
                        blog: blog,
                        moment: moment
                    });
                }
            });
    }
});

router.get("/en/download", function (req, res, next) {
    "use strict";
    Document.find({}).populate("uploader", "name_en").exec(function (err, docs) {
        if (err) {
            docs = [];
        }
        res.render("index_en", {
            name: "download",
            files: docs
        });
    });
});

router.get("/showmember", function (req, res, next) {
    "use strict";
    User.findById(req.query.id, "-_id -password -_v")
        .populate("supervisor", "name_en")
        .populate("group")
        .populate("educations", "", null, {sort: {start: -1}})
        .populate("publications", "", null, {sort: {date: -1}})
        .exec(function (err, user) {
        if (err) {
            console.error(err);
            return next();
        } else {
            res.render("member", {
                "user": user,
                moment: moment
            });
        }
    });
});

router.get("/file", function (req, res, next) {
    "use strict";
    if (req.cookies["api-token"] === undefined) {
        return next({status: 401});
    } else if (req.query.id === undefined) {
        return next({status: 400});
    } else {
        var dtoken = null;
        try {
            dtoken = jwt.decode(req.cookies["api-token"], {complete: true}) || {};
        } catch (err) {
            return next({status: 401});
        }
        if (new Date(dtoken.payload.expire) < new Date(Date.now())) {
            return next({status: 401});
        }
        File.findById(req.query.id, function (err, file) {
            if (err) {
                console.error("Error occurred when finding file.");
                console.error(err);
                return next();
            } else {
                var tmppath = path.join(FILE_PATH, file.path);
                return res.download(tmppath, file.name);
            }
        });
    }
});

// Login & register
router.get("/addAdmin", function (req, res, next) {
    "use strict";
    var user = new User({
        username: "tianshilei",
        name: "田世磊",
        name_en: "Shilei Tian",
        admin: true
    });
    user.setPassword("123456");
    user.save(function (err) {
        if (err) {
            console.log("Failed to add new admin.");
            return unknownError(err, next);
        } else {
            res.sendStatus(200);
        }
    });
});

router.get("/signup", function (req, res, next) {
    return res.render("signup");
});

router.post("/login", function (req, res, next) {
    "use strict";
    if (req.body.username === undefined || req.body.password === undefined) {
        return res.sendStatus(400);
    }
    User.findOne({username: req.body.username}, function (err, user) {
        if (err) {
            console.error("Error occurred when finding one user.");
            console.error(err);
            return res.sendStatus(500);
        } else if (!user) {
            return res.status(404).json({
                "status": "error",
                "message": "User not exists."
            });
        } else if (!user.validPassword(req.body.password)) {
            return res.status(401).json({
                "status": "error",
                "message": "Invalid password."
            });
        } else {
            return res.cookie("api-token", user.generateJWT(), {
                expires: new Date(Date.now() + 86400000)
            }).json({'token': user.generateJWT()});
        }
    });
});

router.post("/signup", function (req, res, next) {
    "use strict";
    if (req.body.username === undefined) {
        return res.sendStatus(400);
    }
    User.findOne({username: req.body.username}, function (err, u) {
        if (err) {
            console.error("Error occurred when finding whether there exists the username.");
            console.error(err);
            res.sendStatus(500);
        } else if (u) {
            return res.status(400).json({
                "status": "error",
                "message": "The username has existed."
            });
        } else {
            var user = new User(req.body);
            user.setPassword(user.password);
            user.save(function (err) {
                if (err) {
                    console.error("Error occurred when saving the new user.");
                    console.error(err);
                    return res.sendStatus(500);
                } else {
                    return res.sendStatus(200);
                }
            });
        }
    });
});

module.exports = router;
