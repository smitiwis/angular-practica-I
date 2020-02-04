import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  agregarUsuario(){
    return false; 
  }

  arrayUsuarios: string[] = ['Luis', 'Angel', 'Ester', 'Melissa', 'Carlos', 'Paul'];

  capturarDato(inputDato){
    if (inputDato.value) {
      this.arrayUsuarios.push(inputDato.value);
      inputDato.value ="";
      inputDato.focus();
    }
  }

  eliminarUsuario(usuario) {
    for (let i = 0; i < this.arrayUsuarios.length; i++) {
      let nomUser = this.arrayUsuarios[i];
      if (usuario == nomUser) {
        this.arrayUsuarios.splice(i, 1);
      }
    }
  }

  name:string = "Luis Peralta";
  age:number= 28;
  

}