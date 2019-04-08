/**
 * This file is the route control of dashboard. Note: Nearly all the routes responsed by
 * this file need auth.
 *
 * @name      api.js
 * @summary   Route control of dashboard
 * @link      /route/api.js
 * @since     2016-08-02
 * @author    Shilei Tian <tianshilei@sjtu.edu.cn>
 */

// 3rd party modules
var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
var async = require("async");

//Util
var email = require('../util/email');
var config = require('../configs/config');

// Models
var User = require('../models/user');
var Education = require('../models/education');
var Award = require('../models/award');
var Publication = require('../models/publication');
var Group = require('../models/group');
var News = require('../models/news');
var Achievement = require('../models/achievement');
var Blog = require('../models/blog');
var File = require("../models/file");
var Image = require("../models/image");
var Document = require("../models/document");

const path = require('path');
const ROOT_PATH = path.join(__dirname, '..');

// Multer configuration
var avatarDiskStorage = multer.diskStorage({
    // destination: "./public/images/avatars/",
    destination: path.join(ROOT_PATH, 'public/images/avatars'),
    filename: function(req, file, cb) {
        cb(null, req.payload.id);
    }
});
var uploadAvatar = multer({ storage: avatarDiskStorage }).single("avatar");

var fileDiskStorage = multer.diskStorage({
    // destination: "./files/private",
    destination: path.join(ROOT_PATH, 'files/private'),
    filename: function(req, file, cb) {
        cb(null, file.originalname + "_" + Date.now());
    }
});
var uploadFile = multer({ storage: fileDiskStorage });

// var uploadImage = multer({ dest: "./public/images/" });
var uploadImage = multer({ dest: path.join(ROOT_PATH, 'public/images') });

var storageForDocuments = multer.diskStorage({
    // destination: './files/public/',
    destination: path.join(ROOT_PATH, 'files/public'),
    filename: function(req, file, cb) {
        cb(null, file.originalname + "_" + Date.now());
    }
});
var uploadDocs = multer({ storage: storageForDocuments });

// Print error info and write response
function unknownError(res, err) {
    console.error(err);
    return res.sendStatus(500);
}

// The middleware of checking admin role
function authAdmin(req, res, next) {
    "use strict";
    if (req.payload.admin) {
        return next();
    } else {
        console.error('admin: ' + req.payload.admin);
        next("Not permitted");
    }
}

// Retrieve the user profile
router.get('/profile', function(req, res, next) {
    "use strict";
    User.findById(req.payload.id, "-password -admin -_v -_id")
        .populate("publications")
        .populate("educations")
        .populate("awards")
        .exec(function(err, user) {
            if (err) {
                console.error("Error occurred when retrieving the user profile.");
                return unknownError(res, err);
            } else {
                return res.json(user);
            }
        });
});

// Upload the avatar
router.post('/avatar', uploadAvatar, function(req, res, next) {
    "use strict";
    var indexPath = req.file.path.indexOf('/images/');
    var newPath = req.file.path.slice(indexPath);
    User.update({ _id: req.payload.id }, { $set: { photo: newPath } }, function(err) {
        if (err) {
            console.error("Error occurred when updating user photo.");
            return unknownError(res, err);
        } else {
            return res.json({ 'photo': newPath });
        }
    });
});

// Modify the user profile
router.put('/profile', function(req, res, next) {
    "use strict";
    User.update({ _id: req.payload.id }, { $set: req.body }, function(err) {
        if (err) {
            console.error("Error occurred when updating user profile.");
            return unknownError(res, err);
        } else {
            res.sendStatus(200);
        }
    });
});

// Add the education
router.post('/education', function(req, res, next) {
    "use strict";
    var education = new Education(req.body);
    education.save(function(err) {
        if (err) {
            console.error("Failed to save the education.");
            return unknownError(res, err);
        } else {
            User.update({ _id: req.payload.id }, { $push: { educations: education } }, function(err) {
                if (err) {
                    console.error("Failed to update the educations field of user.");
                    return unknownError(res, err);
                } else {
                    return res.sendStatus(200);
                }
            });
        }
    });
});

// Delete the education
router.delete('/education', function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    } else {
        User.update({ _id: req.payload.id }, { $pull: { educations: req.query.id } }, function(err) {
            if (err) {
                console.error("Error occurred when updating the educations field of user.");
                return unknownError(res, err);
            } else {
                res.sendStatus(200);
                Education.findByIdAndRemove(req.query.id, function(err) {
                    if (err) {
                        console.error("Failed to remove the education.");
                    }
                });
            }
        });
    }
});

// Add the award
router.post('/award', function(req, res, next) {
    "use strict";
    var award = new Award(req.body);
    award.save(function(err) {
        if (err) {
            console.error("Failed to save the new award.");
            return unknownError(res, err);
        } else {
            User.update({ _id: req.payload.id }, { $push: { awards: award._id } }, function(err) {
                if (err) {
                    console.error("Failed to update the award field of user.");
                    return unknownError(res, err);
                } else {
                    return res.sendStatus(200);
                }
            });
        }
    });
});

// Delete the award
router.delete('/award', function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    } else {
        User.update({ _id: req.payload.id }, { $pull: { awards: req.query.id } }, function(err) {
            if (err) {
                console.error("Failed to update the awards field of user.");
                return unknownError(res, err);
            } else {
                res.sendStatus(200);
                Award.findByIdAndRemove(req.query.id, function(err) {
                    if (err) {
                        console.error("Failed to remove the award.");
                    }
                });
            }
        });
    }
});

// Add the publication
router.post('/publication', function(req, res, next) {
    "use strict";
    var pub = new Publication(req.body);
    pub.save(function(err) {
        if (err) {
            console.error("Failed to save the publication.");
            return unknownError(res, err);
        } else {
            User.update({ _id: req.payload.id }, { $push: { publications: pub._id } }, function(err) {
                if (err) {
                    console.error("Failed to update the publication field of user.");
                    return unknownError(res, err);
                } else {
                    return res.sendStatus(200);
                }
            });
        }
    });
});

// Remove the publication
router.delete('/publication', function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    } else {
        User.update({ _id: req.payload.id }, { $pull: { publications: req.query.id } }, function(err) {
            if (err) {
                console.error("Failed to update the publications field of user.");
                return unknownError(res, err);
            } else {
                res.sendStatus(200);
                Publication.findByIdAndRemove(req.query.id, function(err) {
                    if (err) {
                        console.error("Failed to remove the publication.");
                    }
                });
            }
        });
    }
});

// Get the user list for management
router.get('/user', authAdmin, function(req, res, next) {
    "use strict";
    var condition = {};
    if (req.query['category']) {
        if (req.query['category'] === 'student') {
            condition['role'] = { $ne: 3 };
        } else if (req.query['category'] === 'supervisor') {
            condition['role'] = 3;
        }
    }
    User.find(condition, '_id username name name_en photo supervisor admin role groups graduate')
        .populate('groups', '_id name')
        .populate('supervisor', '_id name name_en')
        .exec(function(err, users) {
            if (err) {
                console.error("Failed to retrieve the user from database.");
                return unknownError(res, err);
            } else {
                return res.json(users);
            }
        });
});

// Add the new user
router.post('/user', authAdmin, function(req, res, next) {
    "use strict";
    if (req.body._id === undefined) {
        var user = new User(req.body);
        user.setPassword(user.password);
        User.findOne({ username: user.username }, function(err, u) {
            if (err) {
                console.error("Failed to find user by username.");
                return unknownError(res, err);
            } else if (u) {
                return res.status(400).json({
                    'status': "error",
                    "message": 'username already used'
                });
            }
            user.save(function(err) {
                if (err) {
                    console.error("Failed to save the new user.");
                    return unknownError(res, err);
                } else {
                    return res.sendStatus(200);
                }
            });
        });
    } else {
        var id = req.body._id;
        delete req.body._id;
        User.update({ _id: id }, { $set: req.body }, function(err) {
            if (err) {
                console.error("Failed to update the user.");
                return unknownError(res, err);
            } else {
                return res.sendStatus(200);
            }
        });
    }
});

// Delete the user
router.delete('/user', authAdmin, function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    }
    User.findByIdAndRemove(req.query.id, function(err, user) {
        if (err) {
            console.error("Failed to find a user by ID and remove it.");
            return unknownError(res, err);
        } else if (!user) {
            console.error("Cannot find the user for delete.");
            return res.sendStatus(404);
        } else {
            res.sendStatus(200);
            if (user.photo !== "/img/no_avatar.png") {
                fs.unlink(path.join(ROOT_PATH, 'public', user.photo), function(err) {
                    if (err) {
                        conole.error("Failed to unlink the user avatar.");
                        console.error(err);
                    }
                });
            }
        }
    });
});

// Add & modify the group
router.post('/group', authAdmin, function(req, res, next) {
    "use strict";
    if (req.body["_id"] === undefined) {
        Group.findOne({ name: req.body.name }, function(err, g) {
            if (err) {
                console.error("Error occurred when finding the group.");
                return unknownError(res, err);
            } else if (g) {
                return res.status(400).json({
                    "status": "error",
                    "message": "The group name has existed."
                });
            }
            var group = new Group(req.body);
            group.save(function(err) {
                if (err) {
                    console.error("Error occurred when saving the new group object.");
                    return unknownError(res, err);
                } else {
                    return res.sendStatus(200);
                }
            });
        });
    } else {
        var id = req.body["_id"];
        delete req.body["_id"];
        Group.update({ _id: id }, { $set: req.body }, function(err, group) {
            if (err) {
                console.error("Error occurred when updating the group.");
                return unknownError(res, err);
            } else {
                return res.sendStatus(200);
            }
        });
    }
});

// Get group information
router.get('/group', function(req, res, next) {
    "use strict";
    if (req.query.uid === undefined) {
        Group.find({}).populate("parent", "name").exec(function(err, gs) {
            if (err) {
                console.error("Failed to find the groups.");
                return unknownError(res, err);
            } else {
                return res.json(gs);
            }
        });
    } else {
        User.findById(req.query.uid, "groups").populate("groups").exec(function(err, user) {
            if (err) {
                console.error("Failed to find the groups of a user.");
                return unknownError(res, err);
            } else if (!user) {
                console.error("The user doesn't exist.");
                return res.sendStatus(404);
            } else {
                return res.json(user.groups)
            }
        });
    }
});

// Delete a group
router.delete('/group', authAdmin, function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    }
    Group.remove({ _id: req.query.id }, function(err) {
        if (err) {
            console.error("Error occurred when deleting the group");
            return unknownError(res, err);
        } else {
            return res.sendStatus(200);
        }
    });
});

// Add and modify news
router.post('/news', authAdmin, function(req, res, next) {
    "use strict";
    if (req.body._id === undefined) {
        var news = new News(req.body);
        news.save(function(err) {
            if (err) {
                console.error("Failed to save the new news.");
                return unknownError(res, err);
            } else {
                res.sendStatus(200);
            }
        });
    } else {
        var id = req.body._id;
        delete req.body["_id"];
        News.update({ _id: id }, { $set: req.body }, function(err, news) {
            if (err) {
                console.error("Failed to update the news item.");
                return unknownError(res, err);
            } else {
                return res.sendStatus(200);
            }
        });
    }
});

// Get news list
router.get('/news', authAdmin, function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        News.find({}, "_id title date", { sort: { date: -1 } }, function(err, news) {
            if (err) {
                console.error("Error occurred when query news list.");
                return unknownError(res, err);
            } else {
                return res.json(news);
            }
        });
    } else {
        News.findById(req.query.id, function(err, news) {
            if (err) {
                console.error("Error occurred when query one article.");
                return unknownError(res, err);
            } else {
                return res.json(news);
            }
        });
    }
});

// Delete a piece of news
router.delete('/news', authAdmin, function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    }
    News.remove({ _id: req.query.id }, function(err) {
        if (err) {
            console.error("Failed to delete the news.");
            return unknownError(res, err);
        } else {
            return res.sendStatus(200);
        }
    });
});

// Get the achievement list
router.get('/achievement', authAdmin, function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        Achievement.find({}, "title date", { sort: { date: -1 } }, function(err, achievements) {
            if (err) {
                console.error("Error occurred when fetching the achievement list.");
                return unknownError(res, err);
            } else {
                return res.json(achievements);
            }
        });
    } else {
        Achievement.findById(req.query.id, function(err, achievement) {
            if (err) {
                console.error("Error occurred when fetching the achievement.");
                return unknownError(res, err);
            } else if (!achievement) {
                console.error("Cannot find the achievement.");
                return res.sendStatus(404);
            } else {
                return res.json(achievement);
            }
        });
    }
});

// Add a new achievement
router.post('/achievement', authAdmin, function(req, res, next) {
    "use strict";
    if (req.body._id === undefined) {
        var achievement = new Achievement(req.body);
        achievement.save(function(err) {
            if (err) {
                return unknownError(res, err);
            } else {
                res.sendStatus(200);
            }
        });
    } else {
        var id = req.body._id;
        delete req.body["_id"];
        Achievement.update({ _id: id }, { $set: req.body }, function(err, news) {
            if (err) {
                console.error("Failed to update the achievement item.");
                return unknownError(res, err);
            } else {
                return res.sendStatus(200);
            }
        });
    }
});

// Delete an achievement
router.delete('/achievement', authAdmin, function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    }
    Achievement.remove({ _id: req.query.id }, function(err) {
        if (err) {
            console.error("Failed to delete the achievement.");
            return unknownError(res, err);
        } else {
            return res.sendStatus(200);
        }
    })
});

// Add a blog
router.post('/blog', uploadFile.array("attachments"), function(req, res, next) {
    "use strict";
    if (req.body._id === undefined) {
        var blog = new Blog({
            title: req.body.blog.title,
            content: req.body.blog.content,
            author: req.payload.id,
            group: req.body.blog.group,
            date: Date.now()
        });
        var attachLists = [];
        async.each(req.files, function(file, cb) {
            var indexFile = file.path.indexOf('files/');
            var tmpPath = file.path.slice(indexFile);
            var fileObj = File({
                name: file.originalname,
                size: file.size,
                path: tmpPath,
                date: Date.now(),
                publisher: req.payload.id
            });
            blog.attachments = [];

            fileObj.save(function(err) {
                if (err) {
                    cb(err);
                } else {
                    blog.attachments.push(fileObj);
                    attachLists.push({ filename: file.originalname, path: file.path });
                    cb();
                }
            });
        }, function(err) {
            if (err) {
                console.error("Error occurred when saving the attachments.");
                return unknownError(res, err);
            } else {
                blog.save(function(err) {
                    if (err) {
                        console.error("Error occurred when saving the blog.");
                        return unknownError(res, err);
                    } else {
                        res.sendStatus(200);
                        // Log doesn't send email
                        if (!(blog.title.toLowerCase().match('log'))) {
                            email.sendMail(config.email.anlEmail, blog.title, blog.content, attachLists);
                        }
                    }
                });

            }
        });
    } else {
        var attachLists = []
        async.each(req.files, function(file, cb) {
            var indexFile = file.path.indexOf('files/');
            var tmpPath = file.path.slice(indexFile);
            var fileObj = File({
                name: file.originalname,
                size: file.size,
                path: tmpPath,
                date: Date.now(),
                publisher: req.payload.id
            });
            // Maybe lead to the multithread problem!
            if (!req.body.blog.attachments) {
                req.body.blog.attachments = [];
            }
            fileObj.save(function(err) {
                if (err) {
                    cb(err);
                } else {
                    req.body.blog.attachments.push(fileObj);
                    attachLists.push({ filename: file.originalname, path: tmpPath });
                    cb();
                }
            });
        }, function(err) {
            if (err) {
                console.error("Error occurred when saving the attachments.");
                return unknownError(res, err);
            } else {
                Blog.update({ _id: req.body._id }, { $set: req.body.blog }, function(err) {
                    if (err) {
                        console.error("Failed to update the blog.");
                        return unknownError(res, err);
                    } else {
                        return res.sendStatus(200);
                        //email.sendMail(config.email.anlEamil, req.body.blog.title, req.body.blog.content, attachLists);
                    }
                });
            }
        });
    }
});

// Get the blog, either a list or a specific one
router.get('/blog', function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        var condition = {};
        if (!req.payload.admin) {
            condition.author = req.payload.id;
        }
        Blog.find(condition, "title date author", { sort: { date: -1 } })
            .populate("author", "name").populate("attachments", "name").exec(function(err, list) {
                if (err) {
                    console.error("Cannot get the list of blogs.");
                    return unknownError(err);
                } else {
                    return res.json(list);
                }
            });
    } else {
        Blog.findById(req.query.id, "-author -comments").populate("group", "name").populate("attachments", "name")
            .exec(function(err, blog) {
                if (err) {
                    console.error("Failed to fetch the blog");
                    return unknownError(res, err);
                } else if (!blog) {
                    console.error("No blog found.");
                    return res.sendStatus(404);
                } else {
                    return res.json(blog);
                }
            });
    }
});

// Delete a blog
router.delete('/blog', function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    }
    Blog.remove({ _id: req.query.id }, function(err) {
        if (err) {
            console.error("Failed to delete the blog.");
            return unknownError(res, err);
        } else {
            return res.sendStatus(200);
        }
    });
});

// Update images
router.post('/image', uploadImage.array("images"), function(req, res, next) {
    "use strict";
    var imagesPath = [];
    async.each(req.files, function(image, cb) {
        var indexFile = image.path.indexOf('images/');
        var tmpPath = image.path.slice(indexFile);
        imagesPath.push(tmpPath);
        cb();
    }, function(err) {
        if (err) {
            console.error("Error occurred when processing the uploaded images.");
            return unknownError(res, err);
        } else {
            return res.json(imagesPath);
        }
    });
});

// Upload home page images
router.post('/carousel_image', authAdmin, uploadImage.array("images"), function(req, res, next) {
    "use strict";
    async.each(req.files, function(file, cb) {
        var indexFile = file.path.indexOf('/images/');
        var tmpPath = file.path.slice(indexFile);
        var image = new Image({

            // path: file.path.substr(6),
            path: tmpPath,
            date: Date.now()
        });
        image.save(function(err) {
            if (err) {
                console.error("Error occurred when saving the image.");
                cb(err);
            } else {
                cb();
            }
        });
    }, function(err) {
        if (err) {
            return unknownError(res, err);
        } else {
            return res.sendStatus(200);
        }
    });
});

// Get the home page image list
router.get('/carousel_image', authAdmin, function(req, res, next) {
    "use strict";
    Image.find({}, function(err, images) {
        if (err) {
            console.error("Error occurred when retrieving the images.");
            return unknownError(res, err);
        } else {
            return res.json(images);
        }
    });
});

// Delete a carousel image
router.delete('/carousel_image', authAdmin, function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    }
    Image.findByIdAndRemove(req.query.id, function(err, image) {
        if (err) {
            console.error("Error occurred when finding the carousel image.");
            return unknownError(res, err);
        } else if (!image) {
            console.error("Cannot find the carousel image.");
            return res.sendStatus(404);
        } else {
            res.sendStatus(200);
            var tmpPath = path.join(ROOT_PATH, 'public', image.path);
            /*fs.unlink("./public" + image.path, function(err) {
                if (err) {
                    console.error("Failed to unlink the corresponding file.");
                }
            });*/
            // console.log('delete file path: ' + tmpPath)
            fs.unlink(tmpPath, function(err) {
                if (err) {
                    console.error("Failed to unlink the corresponding file.");
                }
            });
        }
    });
});

// Upload a public document
router.post('/doc', authAdmin, uploadDocs.array("files"), function(req, res, next) {
    "use strict";
    if (req.files.length === 1) {
        req.body.information = [req.body.information];
    }
    if (req.files.length !== req.body.information.length) {
        console.error("The length of files is not equal to that of information.");
        return res.sendStatus(400);
    }
    var newDocs = [];
    for (var i = 0; i < req.files.length; ++i) {
        var indexFile = req.files[i].path.indexOf('files/');
        var tmpPath = req.files[i].path.slice(indexFile);
        var doc = new Document({
            name: req.files[i].originalname,
            size: req.files[i].size,
            introduction: req.body.information[i],
            path: tmpPath,
            date: Date.now(),
            uploader: req.payload.id
        });
        newDocs.push(doc);
    }
    async.each(newDocs, function(doc, cb) {
        doc.save(function(err) {
            if (err) {
                cb(err);
            } else {
                cb();
            }
        });
    }, function(err) {
        if (err) {
            console.error("Failed to save the uploaded files.");
            return unknownError(res, err);
        } else {
            return res.sendStatus(200);
        }
    });
});

// Get the public document list
router.get('/doc', function(req, res, next) {
    "use strict";
    Document.find({}, function(err, docs) {
        if (err) {
            console.error("Error occurred when finding the documents.");
            return unknownError(res, err);
        } else {
            return res.json(docs);
        }
    });
});

// Delete a public document
router.delete('/doc', function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    }
    Document.findByIdAndRemove(req.query.id, function(err, doc) {
        if (err) {
            console.error("Failed to find the document.");
            return unknownError(res, err);
        } else if (!doc) {
            return res.sendStatus(404);
        } else {
            res.sendStatus(200);
            /*fs.unlink(doc.path, function(err) {
                if (err) {
                    console.error("Error when unlink the file.");
                    console.error(err);
                }
            });*/
            fs.unlink(path.join(ROOT_PATH, doc.path), function(err) {
                if (err) {
                    console.error("Error when unlink the file.");
                    console.error(err);
                }
            });
        }
    });
});

// Get a private file
router.get("/file", function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return next("Need an id.");
    } else {
        File.findById(req.query.id, function(err, file) {
            if (err) {
                console.error("Failed to find the file.");
                return unknownError(res, err);
            } else if (!file) {
                console.error("File not found.");
                return next({ status: 404 });
            } else {
                var tmppath = path.join(FILE_PATH, file.path);
                res.download(tmppath.path, file.name);
            }
        });
    }
});

// Delete a private file
router.delete("/file", function(req, res, next) {
    "use strict";
    if (req.query.id === undefined) {
        return res.sendStatus(400);
    } else {
        File.findById(req.query.id, function(err, file) {
            if (err) {
                console.error("Failed to find the file.");
                return unknownError(res, err);
            } else if (!file) {
                return res.sendStatus(400);
            } else {
                file.remove(function(err) {
                    if (err) {
                        console.error("Failed to remove the file document from database.");
                        return unknownError(res, err);
                    } else {
                        res.sendStatus(200);
                        // fs.unlink(file.path, function(err) {
                        //     if (err) {
                        //         console.error("Failed to unlink the file.");
                        //     }
                        // });
                        fs.unlink(path.join(ROOT_PATH, file.path), function(err) {
                            if (err) {
                                console.error("Failed to unlink the file.");
                            }
                        });
                    }
                });
            }
        });
    }
});

// Modify password
router.post('/password', function(req, res, next) {
    "use strict";
    User.findById(req.payload.id, function(err, user) {
        if (err) {
            console.error("Error occurred when finding the username.");
            console.error(err);
            res.sendStatus(500);
        } else if (!user) {
            return res.status(400).json({
                "status": "error",
                "message": "User not exists."
            });
        } else if (!user.validPassword(req.body.oldPassword)) {
            return res.status(401).json({
                "status": "error",
                "message": "Invalid old password."
            });
        } else {
            user.setPassword(req.body.newPassword);
            user.save(function(err) {
                if (err) {
                    console.error("Error occurred when updating the password.");
                    console.error(err);
                    return res.sendStatus(500);
                } else {
                    return res.sendStatus(200);
                }
            });
        }
    });
});

// reset password
// author: Luke
router.delete('/password', function(req, res, next) {
    "use strict";
    User.findById(req.query.id, function(err, user) {
        if (err) {
            console.error("Error occurred when finding the username.");
            console.error(err);
            res.sendStatus(500);
        } else if (!user) {
            return res.status(400).json({
                "status": "error",
                "message": "User not exists."
            });
        } else {
            user.setPassword("123456");
            user.save(function(err) {
                if (err) {
                    console.error("Error occurred when updating the password.");
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
