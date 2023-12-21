`use strict`

function MakeStudent(name, email, promedio) {
  this.name = name,
  this.email = email,
  this.promedio = promedio
  this.validarPromedio = function(){
    if (this.promedio >= 70) {
      console.log('Aprobado');
    } else if(this.promedio <= 70) {
      console.log('Reprobado');
    }
  }
  this.getUser = function() {
    let sep= this.email.indexOf("@");
    let username = this.email.substring(0, sep);
    console.log(username);
  }
}

let User1 = new MakeStudent('Alexander', 'ajcalle@sudamericano.edu.ec', 85);
User1.validarPromedio();
User1.getUser();
