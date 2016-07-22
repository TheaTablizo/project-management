var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var blobStream = require('blob-stream');
var fs = require('fs');
var PDFDocument = require('pdfkit');
var doc = new PDFDocument();

var id = "153629";

var eName = 'Employee Name';
var headerQuali = 'Summary of Qualifications';
var headerSpec = 'Areas of Specialization';
var headertrain = 'Education and Training';
var headerCareer = 'Career Sypnosis';
var headerExp = 'Project Experience';
var contentQuali = 'sample content.'

// var mysql = require('mysql');
/*
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
*/

function createConn() {
	var connection = mysql.createConnection({
		user: 'training',
		password: 'training',
		host: '10.164.37.53',
		port: 3306,
		database: 'training'
	});
	return connection;
}

/*
function Project(id, name) {
	this.id = id;
	this.name = name;
}
*/

router.get('/', function(req, res, next) {
	// console.log('yyyyyyyyy init');
	
	// var objConn = createConn();
	// objConn.query('SELECT * FROM basic_information where empid = ? AND active_flag = ?', ['120698', 'Y'], function(error, rows) {
	// 	console.log('Basic Information Data');
	// 	console.log(rows.length);
		
	// 	var doc = new PDFDocument();
	// 	//doc.pipe(fs.createWriteStream('file.pdf'));
	// 	doc.text(rows[0].FIRSTNAME + ' ' + rows[0].MIDDLENAME + ' ' + rows[0].LASTNAME, 100,100);

	// 	doc.text('WeServ Systems International, Inc.',100,110);


	// 	doc.pipe(res);
	// 	doc.end();

    //doc.pipe(fs.createWriteStream('file.pdf'));
    doc.text('Hello World and World again!!',100,100);
    doc.pipe(res);
    doc.end();
    });

    router.get('/:id', function(req, res, next) {
    doc.pipe(fs.createWriteStream('file.pdf'));
    doc.fontSize(20);
	doc.text(eName, {
        width:500, 
        align:'center'
    });

    doc.fontSize(10);
    doc.text(headerQuali, {
        width:500, 
        align:'left'
    });

   		doc.fontSize(10);
  		  doc.text(contentQuali,150,100);

    doc.fontSize(12);
    doc.text(headerSpec, {
        width:500, 
        align:'left'
    });
    doc.text(headertrain, {
        width:500, 
        align:'left'
    });
    doc.text(headerCareer, {
        width:500, 
        align:'left'
    });
    doc.text(headerExp, {
        width:500, 
        align:'left'
    });
    doc.pipe(res);
    doc.end();

});

router.post('/:id', function(req, res) {
  res.send("Hello POST view");
});

module.exports = router;
