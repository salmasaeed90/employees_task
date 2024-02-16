import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-address-contact-info',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './address-contact-info.component.html',
  styleUrls: ['./address-contact-info.component.scss']
})
export class AddressContactInfoComponent implements OnInit{
  dropdownOptions:string[]=['option1', 'option2'];
  addressContactForm!:FormGroup;

  @Output('addressContact') addressContact = new EventEmitter()


  ngOnInit(): void {
    // this.addressContact.emit(this.addressContactForm.value);
    this.addressContactForm = new FormGroup({
      country:new FormControl(''),
      governorates:new FormControl(''),
      city:new FormControl(''),
      district:new FormControl(''),
      //////////////////////////////////////////
      emergencyContact:new FormControl('',[Validators.required]),
      relation:new FormControl('',[Validators.required]),
      //////////////////////////////////////////
      localAddress:new FormControl('',[Validators.required]),
      localAddress2:new FormControl(''),
      localAddress3:new FormControl(''),
      localAddress4:new FormControl(''),
      //////////////////////////////////////////
      premanentAddress:new FormControl(''),
      premanentAddress2:new FormControl(''),
      premanentAddress3:new FormControl(''),
      premanentAddress4:new FormControl(''),
      //////////////////////////////////////////
      workPhone:new FormControl(''),
      placeIssuingIdentity:new FormControl(''),
      passportNumber:new FormControl(''),
      //////////////////////////////////////////////
      passportExpirationDate:new FormControl(''),
      //////////////////////////////////////////////
      drivingLicenseNumber:new FormControl(''),
      dateOfissuanceOfLicense:new FormControl(''),
      licenseExpirationDate:new FormControl(''),
      //////////////////////////////////////////////
      syndicateCard:new FormControl(''),
      workPermit:new FormControl(''),
      expirationDateofworkPermit:new FormControl(''),
       //////////////////////////////////////////////
      bloodType:new FormControl(''),
      insurenceDate:new FormControl(''),
      insurenceValue:new FormControl(''),
      //////////////////////////////////////////////
      insurencejobTitle:new FormControl(''),
      insurenceNumber:new FormControl(''),
    })

  }


}
