/*
  Es una tira de bytes (datosbinarios)
  Similar a un array de enteros
  Tamño fijo 
  Manipular datos directamente
      Sockets
      Stream
      Implimentar protocoloscomplejos
      Mnipulacion de ficheros/imagenes
      Criptografia

*/
'use strict'

var buf  = new Buffer(100),
    buf2 = new Buffer(26),
    str  = '\u00bd + \u00bc = \u00be'

    buf.write('abcd', 0, 4, 'ascii')
    console.log(
        buf,
        buf.toString('ascii'),
        str,
        str.length + ' Caracteres',
        Buffer.byteLength(str,'utf8') + ' Bytes'
    )

    for(var i = 0; i < buf2.length;i++){
        buf2[i] = i + 97
    }

    console.log(buf2.toString('ascii'))