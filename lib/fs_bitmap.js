'use strict'

const fs = require('fs');
// const EventEmitter = require('events').EventEmitter;
// const os = require('os');

// var ee = new EventEmitter();

var bitmap = fs.readFile('palette-bitmap.bmp', (err, bitmap) => {
  if (err) throw err;
  //these string encoding lines below are borrowed from the 401d1 class repo
  console.log(`type: ${bitmap.toString('utf8', 0, 2)}`);
  // console.log(`size: ${bitmap.readUInt32LE(2)}`);
  // console.log(`start of pixel data: ${bitmap.readUInt32LE(10)}`);
  // console.log(`width: ${bitmap.readUInt32LE(18)} by height: ${bitmap.readUInt32LE(22)}`);
  // console.log(`number of colors: ${bitmap.readUInt32LE(46)}`);
})
