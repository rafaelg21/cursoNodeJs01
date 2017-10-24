/* Single Thread */
'use strict'

function singleThread(){
    
    process.argv[2] = "Estamos aprendiendo Node.js"
    process.argv[3] = 19
    process.argv[4] = null
    process.argv[5] = true 

    console.log('-----------------------------------')
    console.log('        ELPROCESO DE NODE.JS       ')
    console.log('Id delproceso ............ ' + process.pid)
    console.log('Titulo ................... ' + process.title)
    console.log('Directorio de Node ....... ' + process.execPath)
    console.log('Directorio Actual ........ ' + process.cwd())
    console.log('Version de Node .......... ' + process.version)
    console.log('Version de Dependencias .. ' + process.versions)
    console.log('Plataforma (S.O.) ........ ' + process.platform)
    console.log('Arquitectura (S.O.) ...... ' + process.arch)
    console.log('Tipo Archivos Node ....... ' + process.uptime())
    console.log('Argumentos delproceso .... ' + process.argv)    
    console.log('-----------------------------------')
    var key = 0
    for( key in process.argv){
        console.log(process.argv[key])
    } 
}

singleThread()