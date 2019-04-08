var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('../configs/config');

smtpTransport = nodemailer.createTransport(smtpTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function (recipient, subject, html, attachments) {

    smtpTransport.sendMail({

        from: config.email.user,
        to: recipient,
        subject: subject,
        html: html,
        attachments: attachments
        /*
        attachments:[  
            {  
                filename : 'attach.txt',  
                path: './attach.txt'  
            },
            {
                filename : 'list.doc',
                path : './电子产品.docx'
            }
          ]  
        */
    }, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log('发送邮件成功')   
        }
    });
}

module.exports = {
    sendMail: sendMail
}

//sendMail('gyuanning@sjtu.edu.cn','重要事宜', '组会通知');