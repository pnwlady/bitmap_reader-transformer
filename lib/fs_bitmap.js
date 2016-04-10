'use strict'

const fs = require('fs');
const os = require('os');
const EE = require('events').EventEmitter;

var endianness = os.endianness();

function Bitmap (data) {
  this.fileSize = data.readUIntLE(2, 4); //palette: 11078; non-palette: 30054
  this.pixelArrayOffset = data.readUIntLE(10, 4); //54 to 1078;
  this.headerSize = data.readUIntLE(14, 4); //40
  this.width = data.readUIntLE(18, 4); //100
  this.height = data.readUIntLE(22, 4); //100
  this.colorPanes = data.readUIntLE(26, 2); //1
  this.bitsPerPixel = data.readUIntLE(28, 2); //palette: 8; non-palette: 24
  this.compressionMethod = data.readUIntLE(30, 4);
  this.imageSize = data.readUIntLE(34, 4); //palette: 10,000; non-palette: 30,000
  this.horizRes = data.readUIntLE(38, 4); //2834
  this.vertRes = data.readUIntLE(42, 4); //2834
  this.numColors = data.readUIntLE(46, 4); //non-palette: 256
  this.impColors = data.readUIntLE(50, 4); //non-palette: 256
}

fs.readFile('./../img/non-palette-bitmap.bmp', (error, data) => {
  var scribble = new Bitmap(data);
  console.log(scribble);
  console.log(data.readUIntLE(15000, 1)); //palette: 116; non-palette: 620nod
});
