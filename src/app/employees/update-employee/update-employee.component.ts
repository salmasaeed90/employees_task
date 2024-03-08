import { MaterialModule } from './../../material/material.module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule,MaterialModule,RouterLink,AngularFirestoreModule,FormsModule,],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit{
  dropdownOptions:string[]=['option1', 'option2'];
  certficateType:string[]=['certificates','birthCertificate']
  certificateMandatory:string[]=['Yes','No']
  employeeId!:string | null;
  employeeData:any = {};

  
  constructor(
    private ActivatedRoute:ActivatedRoute,
     private _AngularFirestore:AngularFirestore,
     private _Router:Router ){}

  ngOnInit():void{
    //employee Id
    this.employeeId = this.ActivatedRoute.snapshot.paramMap.get('id');
    //all employss Data
    this._AngularFirestore.doc(`employees/${this.employeeId}`).valueChanges().subscribe(res => this.employeeData = res)
    
  }

  updateEmployeeData(){
    const newData = {
      
      staffNo:this.employeeData.staffNo ,
      type:this.employeeData.type ,
      cardNum:this.employeeData.cardNum, 
      branch:this.employeeData.branch,
      fNameinA:this.employeeData.fNameinA ,
      mNameinA:this.employeeData.mNameinA ,
      blNameinA:this.employeeData.blNameinA ,
      lNameinA:this.employeeData.lNameinA,
      fNameinE:this.employeeData.fNameinE ,
      mNameinE:this.employeeData.mNameinE ,
      blNameinE:this.employeeData.blNameinE,
      lNameinE:this.employeeData.lNameinE,
      peopleOfDetermination:this.employeeData.peopleOfDetermination,
      research:this.employeeData.research,
      gender:this.employeeData.gender,
      dateOfBirth:this.employeeData.dateOfBirth,
      placeOfBirth:this.employeeData.placeOfBirth,
      union:this.employeeData.union,
      department:this.employeeData.department,
      devision:this.employeeData.devision,
      shiftTime:this.employeeData.shiftTime,
      religion:this.employeeData.religion,
      phone:this.employeeData.phone,
      materialStatus:this.employeeData.materialStatus,
      jobDegree:this.employeeData.jobDegree,
      indentificationType:this.employeeData.indentificationType,
      nationalID:this.employeeData.nationalID,
      nationalIDEndDate:this.employeeData.nationalIDEndDate,
      nationality:this.employeeData.nationality,
      attendenceMachineCode:this.employeeData.attendenceMachineCode,
      //img
      //file
      // signatur:this.employeeData.signatur,
      // employee:this.employeeData.employee,
      personalEmailAddress:this.employeeData.personalEmailAddress,
      officialEmailAddress:this.employeeData.officialEmailAddress,
      
      ////////////////////////////////////////////////////////////
      country:this.employeeData.country,
      governorates:this.employeeData.governorates,
      city:this.employeeData.city,
      district:this.employeeData.district,
      emergencyContact:this.employeeData.emergencyContact,
      relation:this.employeeData.relation,
      localAddress:this.employeeData.localAddress,
      localAddress2:this.employeeData.localAddress2,
      localAddress3:this.employeeData.localAddress3,
      localAddress4:this.employeeData.localAddress4,
      premanentAddress:this.employeeData.premanentAddress,
      premanentAddress2:this.employeeData.premanentAddress2,
      premanentAddress3:this.employeeData.premanentAddress3,
      premanentAddress4:this.employeeData.premanentAddress4,
      workPhone:this.employeeData.workPhone,
      placeIssuingIdentity:this.employeeData.placeIssuingIdentity,
      passportNumber:this.employeeData.passportNumber,
      passportExpirationDate:this.employeeData.passportExpirationDate,
      drivingLicenseNumber:this.employeeData.drivingLicenseNumber,
      dateOfissuanceOfLicense:this.employeeData.dateOfissuanceOfLicense,
      licenseExpirationDate:this.employeeData.licenseExpirationDate,
      syndicateCard:this.employeeData.syndicateCard,
      workPermit:this.employeeData.workPermit,
      expirationDateofworkPermit:this.employeeData.expirationDateofworkPermit,
      bloodType:this.employeeData.bloodType,
      insurenceDate:this.employeeData.insurenceDate,
      insurenceValue:this.employeeData.insurenceValue,
      insurencejobTitle:this.employeeData.insurencejobTitle,
      insurenceNumber:this.employeeData.insurenceNumber,
      ////////////////////////////////////////////////////////////
      dataOfAppointment: this.employeeData.dataOfAppointment,
      dataOfJoining: this.employeeData.dataOfJoining,
      dateOfConfirmation: this.employeeData.dateOfConfirmation,
      probationPeriodNumber:this.employeeData.probationPeriodNumber ,
      probationPeriod:this.employeeData.probationPeriod ,
      probationPeriodEndDate:this.employeeData.probationPeriodEndDate,
      contractStartingDate:this.employeeData.contractStartingDate ,
      expiryDateOfContract: this.employeeData.expiryDateOfContract,
      noticPeriodNumber:this.employeeData.noticPeriodNumber ,
      noticPeriod:this.employeeData.noticPeriod ,
      contractPlace:this.employeeData.contractPlace ,
      contractType:this.employeeData.contractType,
      isHalfTime:this.employeeData.isHalfTime,
      cader:this.employeeData.cader,
      travelingTicet:this.employeeData.travelingTicet,
      basicSalary: this.employeeData.basicSalary,
      housingAllounce: this.employeeData.housingAllounce,
      socialSubscription:this.employeeData.socialSubscription,
      paymentMethod:this.employeeData.paymentMethod,
      remarks:this.employeeData.remarks ,
      //table
      certificates:{
        documentHiringtype:this.employeeData.documentHiringtype,
        documentHiringMandatory:this.employeeData.documentHiringMandatory,
        documentHiringStatus:this.employeeData.documentHiringStatus,
        // documentHiringFile:this.employeeData.documentHiringFile,
        documentHiringView:this.employeeData.documentHiringView,
        documentHiringExpiryDate:this.employeeData.documentHiringExpiryDate,
        documentHiringRecieveDate:this.employeeData.documentHiringRecieveDate,

      },
      birthcertificate:{
        birthDocumentHiringtype:this.employeeData.birthDocumentHiringtype,
        birthDocumentHiringMandatory:this.employeeData.birthDocumentHiringMandatory,
        birthDocumentHiringStatus:this.employeeData.birthDocumentHiringStatus,
        // birthDocumentHiringFile:this.employeeData.birthDocumentHiringFile,
        birthDocumentHiringView:this.employeeData.birthDocumentHiringView,
        birthDocumentHiringExpiryDate:this.employeeData.birthDocumentHiringExpiryDate,
        birthDocumentHiringRecieveDate:this.employeeData.birthDocumentHiringRecieveDate

      },
    }
    
    const updated = this._AngularFirestore.doc('employees/'+this.employeeId).update(newData);
    this._Router.navigate(['/employees-list'])
    return updated;

  }


  //handel table file
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
