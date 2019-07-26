var http = require('http');
var nodemailer = require('nodemailer');
var tranporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
  	user: 'kushagraathale98@gmail.com',
  	pass: 'helloimawesome'
  }
});
var mailOptions = {
	from: 'kushagraathale98@gmail.com',
	to: 'kushagra.161b113@gmail.com',
	subject: 'sending mail through NodeJS',
	text: 'sending mail'
};
tranporter.sendMail(mailOptions,function(error,info){
	if(error){
		console.log(error);
    }
    else{
    	console.log('Email sent :'+ info.response);
    }
});