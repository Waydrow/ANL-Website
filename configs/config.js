/**
 * Created by zhihui on 15-5-26.
 * Modified by Shilei Tian on 2016-08-14.
 */
var expressJwt = require('express-jwt');

var jwt = {
    secret: 'asdflsajfdalsdfjasfdasdfasldfjl',
    session_days: 1
};

var bcrypt = {
    salt_round: 10
};

var mongodb = {
    url: 'mongodb://localhost/anlsjtu'
};

//old anlEamil: 'anl@cs.sjtu.edu.cn'
var email = {
    service: '163',
    user: 'anl_sjtu@163.com',
    pass: 'anle309',
    anlEmail: 'anl-cs-sjtu@googlegroups.com'
};

var auth = expressJwt({
    secret: jwt.secret,
    userProperty: 'payload'
});

module.exports = {
    jwt: jwt,
    bcrypt: bcrypt,
    mongodb: mongodb,
    auth: auth,
    email: email,
};
