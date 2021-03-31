var Jimp = require("jimp");

var JPEG = require("jpeg-js");

Jimp.decoders["image/jpeg"] = (data) => {
  return JPEG.decode(data, {
    maxMemoryUsageInMB: 2048,
  });
};

const directory = "./img";

const x500_500 = ["2.jpg", "3.jpg", "4.bmp", "11.jpg"];

const x200_200 = ["atlanta web designer mike.png"];

const w1920 = ["atlanta made sign orange.jpg", "atlanta made sign.jpg"];

x200_200.forEach((fileName) => {
  Jimp.read(`${directory}/${fileName}`, (err, file) => {
    if (err) throw err;
    file
      .resize(200, 200) // resize
      .quality(60) // set JPEG quality
      .write(`${directory}/200x200-${fileName}`); // save
  });
});

w1920.forEach((fileName) => {
  Jimp.read(`${directory}/${fileName}`, (err, file) => {
    if (err) throw err;
    file
      .resize(1920, Jimp.AUTO) // resize with auto height
      .quality(60) // set JPEG quality
      .write(`${directory}/w1920-${fileName}`); // save
  });
});

x500_500.forEach((fileName) => {
  Jimp.read(`${directory}/${fileName}`, (err, file) => {
    if (err) throw err;
    file
      .resize(500, 500) // resize
      .quality(60) // set JPEG quality
      // .greyscale() // set greyscale
      .write(`${directory}/500x500-${fileName}`); // save
  });
});
