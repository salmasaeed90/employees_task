import { Firestore } from '@angular/fire/firestore';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AlldataService } from './alldata.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';




// import { AngularFire } from '@angular/fire';
// import { FirestoreModule } from '@angular/fire/firestore'; // for Firestore
// import { DatabaseModule } from '@angular/fire/database'; // for Realtime Database
// import { environment } from '../environments/environment';




export function HttpLoaderFactory() {
  const http = inject(HttpClient);
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MainPanelComponent,
    HttpClientModule,



    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
      },
    }), 
  
    
  ],
  
  providers: [AlldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
