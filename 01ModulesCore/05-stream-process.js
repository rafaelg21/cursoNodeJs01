'use strict'

const stdin  = process.stdin,
      stdout = process.stdout,
      person = {
        name : null,
        age:0,
        sexo:null
      }  
function  saveSexo(sexo){
    person.sexo = sexo

    if(person.sexo == "M") {
        stdout.write(person.name  + ' Tu Sexo es Masculino \n')
        process.exit()
    }else if(person.sexo == "F"){
        stdout.write(person.name  + ' Tu Sexo es Femenino \n')   
        process.exit()     
    }else{
        var question = 'Error: porfavor escriba M ó F para identificar su sexo : '
        quiz(question, saveSexo)
    }

   
} 

function  saveAge(age){
    person.age = age

    if(person.age > 18) {
        stdout.write(person.name  + ' Es mayor de edad, tiene ' + person.age + ' años \n')
    }else{
        stdout.write(person.name  + ' Es menor de edad, tiene ' + person.age + ' años \n')        
    }

    var question = 'Cual es tu Sexo Masculino=M ó Femenino=F  (M ó F) ' + person.name + ':? '
    quiz(question, saveSexo)
}

function saveName(name){
    person.name = name
 
    var question = ' Hola ' + person.name + 'Cuantos años tienes? '
    quiz(question, saveAge)
}

function quiz(question, callback) {
    stdin.resume()
    stdout.write(question + ': ')
    stdin.once('data', function(res){
        callback(res.toString().trim() )
    })
}

stdin.setEncoding('utf8')
quiz('Como te llamas ?', saveName )