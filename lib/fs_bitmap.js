'use strict'

const fs = require('fs');
// const EventEmitter = require('events').EventEmitter;
// const os = require('os');

// var ee = new EventEmitter

function Bitmap (data) {
  this.fileSize = data.readUIntLE(2, 4); //30054
  this.pixelArrayOffset = data.readUIntLE(10, 4); //54 to 30051
  this.headerSize = data.readUIntLE(14, 4);
  this.width = data.readUIntLE(18, 4); //100
  this.height = data.readUIntLE(22, 4); //100
  this.colorPanes = data.readUIntLE(26, 2);
  this.bitsPerPixel = data.readUIntLE(28, 2); //24
  this.compressionMethod = data.readUIntLE(30, 4);
  this.imageSize = data.readUIntLE(34, 4);
  this.horizRes = data.readUIntLE(38, 4);
  this.vertRes = data.readUIntLE(42, 4);
  this.numColors = data.readUIntLE(46, 4);
  this.impColors = data.readUIntLE(50, 4);
}

fs.readFile('scribble.bmp', (error, data) => {
  var scribble = new Bitmap(data);
  console.log(scribble);
  console.log(data.readUIntLE(15000, 1));
});
// 
// var bitmap = fs.readFile('palette-bitmap.bmp', (err, bitmap) => {
//   if (err) throw err;
//   //these string encoding lines below are borrowed from the 401d1 class repo
//   console.log(`type: ${bitmap.toString('utf8', 0, 2)}`);
//   // console.log(`size: ${bitmap.readUInt32LE(2)}`);
//   // console.log(`start of pixel data: ${bitmap.readUInt32LE(10)}`);
//   // console.log(`width: ${bitmap.readUInt32LE(18)} by height: ${bitmap.readUInt32LE(22)}`);
//   // console.log(`number of colors: ${bitmap.readUInt32LE(46)}`);
// })
