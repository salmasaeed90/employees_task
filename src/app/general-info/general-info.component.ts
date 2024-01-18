import { AddressContactInfoComponent } from './../address-contact-info/address-contact-info.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlldataService } from '../alldata.service';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [CommonModule,MaterialModule,ReactiveFormsModule],
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit{
  constructor(){}
  @Output('generalInfo') generalInfo = new EventEmitter<any>()

 ngOnInit(): void {

    this.generalInfo.emit(this.generalForm)
  }

  generalForm:FormGroup = new FormGroup({

    staffNo:new FormControl('') ,
    type:new FormControl('') ,
    cardNum:new FormControl('') ,
    branch:new FormControl('') ,
    //////////////////////////////////////////////
    fNameinA:new FormControl('') ,
    mNameinA:new FormControl('') ,
    blNameinA:new FormControl('') ,
    lNameinA:new FormControl('') ,
    //////////////////////////////////////////////
    fNameinE:new FormControl('') ,
    mNameinE:new FormControl('') ,
    blNameinE:new FormControl('') ,
    lNameinE:new FormControl('') ,
    //////////////////////////////////////////////
    pod:new FormControl(''),
    research:new FormControl(''),
    adminStaff:new FormControl(''),
    clincalStaff:new FormControl('')
  })
 


}
