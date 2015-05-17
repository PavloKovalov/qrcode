importScripts(
  'grid.js',
  'version.js',
  'detector.js',
  'formatinf.js',
  'errorlevel.js',
  'bitmat.js',
  'datablock.js',
  'bmparser.js',
  'datamask.js',
  'rsdecoder.js',
  'gf256poly.js',
  'gf256.js',
  'decoder.js',
  'qrcode.js',
  'findpat.js',
  'alignpat.js',
  'databr.js'
);


this.onmessage = function(e) {
  var imageData = e.data,
    width, height, result;

  try {
    width = imageData.width;
    height = imageData.height;
    result = qrcode.decode(width, height, imageData);
    
    postMessage(result);
  } 
  catch(e) {
    postMessage(undefined);
  }
}