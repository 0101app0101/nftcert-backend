var Jimp = require('jimp');
// const express= require("express");

// const app = express();
// app.listen()


  Jimp.read('https://i.imgur.com/Toz3PUWh.png')
  .then(image => {
    Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(font => {
       
        image.print(font, 90, 300, "hello world"); 
        image.write('lena-small-bw.jpg');
      });
   
  })
  .catch(err => {
   
  });

