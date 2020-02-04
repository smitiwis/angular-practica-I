// importaciones de angnular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importaciones de componentes creados
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
// importaciones de servicios
import { DataService } from './servicio/data.service';
// importaciones de nuevas funcionalidades de ANGULAR == > formsModule
//*---------------------------------------------------*//
import { FormsModule } from '@angular/forms';
//utilizacion de los componenedes declarando el en NGModule
//*---------------------------------------------------*//
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // UTILIZAMOS NUESTRA IMPORTACION DE formsModule
    //*---------------------------------------------------*//
    FormsModule
    //*---------------------------------------------------*//
  ],
  providers: [
    //NUESTROS SERVICIO
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
