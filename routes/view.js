var express = require('express');
var router = express.Router();
var PDFDocument = require('pdfkit');
var blobStream = require('blob-stream');
var fs = require('fs');
var doc = new PDFDocument();

var eName = 'Employee Name';
var headerQuali = 'Summary of Qualifications';
var headerSpec = 'Areas of Specialization';
var headertrain = 'Education and Training';
var headerCareer = 'Career Sypnosis';
var headerExp = 'Project Experience';
var sampleQuali = 'Qualification 1';
var sampleQuali2 = 'Qualification 2';

router.get('/', function(req, res, next) {
  res.send("Hello GET view");
});

router.get('/:id', function(req, res, next) {
	doc.pipe(fs.createWriteStream('file.pdf'));
    doc.pipe(res);
    doc.fontSize(20);
	doc.text(eName, {
        width:500, 
        align:'center'
    });


    doc.fontSize(12);
    doc.text(headerQuali,100,100, {
        underline:true
    });
    // doc.text(headerSpec,100,120);
    // doc.text(headertrain,100,390);
    // doc.text(headerCareer,100,490);
    // doc.text(headerExp,100,590);
	doc.end();
});

router.post('/:id', function(req, res) {
 
  res.send("Hello POST view");
});
