`use strict`

function MakeStudent(name, email, promedio) {
  this.name = name,
  this.email = email,
  this.promedio = promedio
  this.validarPromedio = function(){
    if (this.promedio >= 70) {
      return 'Aprobado';
    } else if(this.promedio <= 70) {
      return 'Reprobado';
    }
  }
  this.getUser = function() {
    let sep= this.email.indexOf("@");
    let username = this.email.substring(0, sep);
    return username;
  }
}

let user1 = new MakeStudent('Alexander', 'ajcalle@sudamericano.edu.ec', 85);
alert(user1.validarPromedio())
alert(user1.getUser())
