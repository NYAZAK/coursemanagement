import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CoursComponent } from './cours/cours.component';
import { CreercoursComponent } from './cours/creercours/creercours.component';
import { CherchercoursComponent } from './cours/cherchercours/cherchercours.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { DetailcoursComponent } from './cours/detailcours/detailcours.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    CoursComponent,
    CreercoursComponent,
    CherchercoursComponent,
    NotfoundComponent,
    DetailcoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
