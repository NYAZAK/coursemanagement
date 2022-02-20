import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { CoursComponent } from './cours/cours.component';
import { CreercoursComponent } from './cours/creercours/creercours.component';
import { CherchercoursComponent } from './cours/cherchercours/cherchercours.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { DetailcoursComponent } from './cours/detailcours/detailcours.component';
import { HeaderComponent } from './layout/header/header.component';
import { RecherchePipe } from './shared/pipes/recherche.pipe';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { CreationuserComponent } from './auth/creationuser/creationuser.component';


const firebaseConfig = {
  apiKey: "AIzaSyCwxKow53S5i4HI57S0OWMNefVHMNVkKAA",
  authDomain: "coursesmanager-e3a97.firebaseapp.com",
  projectId: "coursesmanager-e3a97",
  storageBucket: "coursesmanager-e3a97.appspot.com",
  messagingSenderId: "378668584460",
  appId: "1:378668584460:web:3ae60eb860865f5916a829",
  measurementId: "G-2HGELGQB2L",
  databaseURL: "https://coursesmanager-e3a97-default-rtdb.europe-west1.firebasedatabase.app"
};


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    CoursComponent,
    CreercoursComponent,
    CherchercoursComponent,
    NotfoundComponent,
    DetailcoursComponent,
    HeaderComponent,
    RecherchePipe,
    CreationuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
