'use strict'

const fs = require('fs'),
      readStream  = fs.createReadStream('assets/nombres.txt'),   
      writeStream = fs.createWriteStream('assets/copia_nombres.txt')

    //   readStream.pipe(writeStream)

    //   readStream.on('data', function(chunk){
    //     console.log(
    //         'He leindo:',
    //         chunk.length,
    //         'Caracteres'
    //     )
    //   })

    //   readStream.on('end', function(){
    //     console.log('Terminé de leer el archivo')  
    //   })
  
// ********** Forma mas limpia de trabjar  ***********
    readStream.pipe(writeStream)

    readStream
        .on('data', function(chunk){
            console.log(
                'He leindo:',
                chunk.length,
                'Caracteres'
            )
          })
        .on('end', function(){
            console.log('Terminé de leer el archivo')  
          })