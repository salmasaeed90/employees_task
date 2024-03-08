import { DataAndFileDocComponent } from './../data-and-file-doc/data-and-file-doc.component';
import { AddressContactInfoComponent } from './../address-contact-info/address-contact-info.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { AlldataService } from '../alldata.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    DataAndFileDocComponent,
    AddressContactInfoComponent,
    GeneralInfoComponent,
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
    HttpClientModule,
    
    
  ],

  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent {
  
  panelOpenState!:boolean;
  panelOpenState2!:boolean;
  panelOpenState3!:boolean;

  

  currentLang!:string;

  dataFromGeneralInfo!:any;
  dataFromFileDoc!:any;
  dataFromAddressContact!:any;
  ///////////////////////////////
  @ViewChild("generalInfo") GeneralInfoComponent!:GeneralInfoComponent;
  @ViewChild('addressContact') AddressContactInfoComponent!:AddressContactInfoComponent;
  @ViewChild('dataAndFileDoc') DataAndFileDocComponent!:DataAndFileDocComponent;

  constructor(
    private _AlldataService:AlldataService,
    private translate:TranslateService,
    private _Router:Router,
    private firestore: AngularFirestore
    ){
      translate.setDefaultLang('en');
      translate.use('en');
      this.currentLang = localStorage.getItem('currentLang') || 'en';
    }
   
    chooseLang(lang:string){
      this.translate.use(lang)
    }
  
  saveAllData(){
    
    const combineAllFormsData = {
      ...this.AddressContactInfoComponent.addressContactForm.value,
      ...this.DataAndFileDocComponent.dataAndFileDocForm.value,
      ...this.GeneralInfoComponent.generalForm.value,
      ...this.DataAndFileDocComponent.certificates,
      ...this.DataAndFileDocComponent.birthCertificate
    }
    // this._AlldataService.postToDB(combineAllFormsData);
     this.firestore.collection('employees').add(combineAllFormsData);
    
    this._Router.navigate(['/employees-list'])
  }

  

  resetData(){
    this.AddressContactInfoComponent.addressContactForm.reset();
    this.DataAndFileDocComponent.dataAndFileDocForm.reset();
    this.GeneralInfoComponent.generalForm.reset();

  }

}
