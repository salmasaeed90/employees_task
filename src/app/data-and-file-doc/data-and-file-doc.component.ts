import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-data-and-file-doc',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MaterialModule,FormsModule,],
  templateUrl: './data-and-file-doc.component.html',
  styleUrls: ['./data-and-file-doc.component.scss']
})
export class DataAndFileDocComponent implements OnInit{
  dropdownOptions:string[]=['option1', 'option2'];
  certficateType:string[]=['certificates','birthCertificate']
  certificateMandatory:string[]=['Yes','No']
  dataAndFileDocForm!:FormGroup;
  



  
  certificates:object={};
  documentHiringtype:string = '';
  documentHiringMandatory:string = '';
  documentHiringStatus:string = '';
  documentHiringFile:string = '';
  documentHiringView:string = '';
  documentHiringExpiryDate:string = '';
  documentHiringRecieveDate:string  ='';
  //////////////////////////////////////////////
  birthCertificate:object = {}

  birthDocumentHiringtype:string = '';
  birthDocumentHiringMandatory:string = '';
  birthDocumentHiringStatus:string = '';
  birthDocumentHiringFile:string = '';
  birthDocumentHiringView:string = '';
  birthDocumentHiringExpiryDate:string = '';
  birthDocumentHiringRecieveDate:string = '';

  constructor(private AngularFirestore:AngularFirestore){

  }
  
 ngOnInit(): void {

    this.dataAndFileDocForm = new FormGroup({
      dataOfAppointment:new FormControl('') ,
      dataOfJoining:new FormControl('',[Validators.required]) ,
      dateOfConfirmation:new FormControl('') ,
      probationPeriodNumber:new FormControl('') ,
      probationPeriod:new FormControl('') ,
      probationPeriodEndDate:new FormControl('') ,
      contractStartingDate:new FormControl('',[Validators.required]) ,
      expiryDateOfContract:new FormControl('',[Validators.required]) ,
      noticPeriodNumber:new FormControl('') ,
      noticPeriod:new FormControl('') ,
      contractPlace:new FormControl('',[Validators.required]) ,
      contractType:new FormControl('',[Validators.required]) ,
      isHalfTime:new FormControl('') ,
      cader:new FormControl('') ,
      travelingTicet:new FormControl('') ,
      basicSalary:new FormControl('',[Validators.required]) ,
      housingAllounce:new FormControl('') ,
      socialSubscription:new FormControl('') ,
      paymentMethod:new FormControl('',[Validators.required]) ,
      remarks:new FormControl('') ,
      //table
      certificates:new FormGroup({
        documentHiringtype:new FormControl('') ,
        documentHiringMandatory:new FormControl('') ,
        documentHiringStatus:new FormControl('') ,
        documentHiringView:new FormControl('') ,
        documentHiringExpiryDate:new FormControl('') ,
        documentHiringRecieveDate:new FormControl('') ,
        documentHiringFile:new FormControl('') ,
        }),
      birthCertificate:new FormGroup({
        birthDocumentHiringtype:new FormControl('') ,
        birthDocumentHiringMandatory:new FormControl('') ,
        birthDocumentHiringStatus:new FormControl('') ,
        birthDocumentHiringFile:new FormControl('') ,
        birthDocumentHiringView:new FormControl('') ,
        birthDocumentHiringExpiryDate:new FormControl('') ,
        birthDocumentHiringRecieveDate:new FormControl('') ,
        })
       
    })
    // this.dataAndFileDocForm.addControl('certificate',new FormControl(this.certificates));

    // this.dataAndFileDocForm.addControl('birthCertificate',new FormControl(this.birthCertificate));


    console.log(this.dataAndFileDocForm.controls);

  }

  confirmCertificates(){
    this.certificates = {
      certificateType_1:this.documentHiringtype,
      certificateMandatory:this.documentHiringMandatory,
      certificateStatus:this.documentHiringStatus,
      certificateFileUploaded:this.documentHiringFile,
      certificateView:this.documentHiringView,
      certificateExpiryDate:this.documentHiringExpiryDate,
      certificateRecieveDate:this.documentHiringRecieveDate,

    }
    console.log(this.certificates);
    
    // this.dataAndFileDocForm.addControl('certificate',new FormControl(this.certificates));
    
    console.log(this.dataAndFileDocForm.controls);


    

  }

  confirmBirthCertificate(){

    this.birthCertificate = {
      certificatetype_2:this.birthDocumentHiringtype,
      birthcertificateMandatory:this.birthDocumentHiringMandatory,
      birthcertificateStatus:this.birthDocumentHiringStatus,
      birthcertificateFileUploaded:this.birthDocumentHiringFile,
      birthcertificateView:this.birthDocumentHiringView,
      birthcertificateExpiryDate:this.birthDocumentHiringExpiryDate,
      birthrcertificateRecieveDate:this.birthDocumentHiringRecieveDate,

    }
    console.log(this.birthCertificate);
    // this.dataAndFileDocForm.addControl('birthCertificate',new FormControl(this.birthCertificate));
    
    console.log(this.dataAndFileDocForm.controls);

  }
  /////////////////////////////////////////
  //handell table files
  certificateFile: any = null;

  onFileSelected_1(event: any): void {
    this.certificateFile = event.target.files[0] ?? null;

  }
  birthcertificateFile: any = null;

  onFileSelected_2(event: any): void {
    this.birthcertificateFile = event.target.files[0] ?? null;

  }

 



  


}
