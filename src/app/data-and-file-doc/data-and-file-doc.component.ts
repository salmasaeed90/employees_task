import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-data-and-file-doc',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './data-and-file-doc.component.html',
  styleUrls: ['./data-and-file-doc.component.scss']
})
export class DataAndFileDocComponent implements OnInit{
  dropdownOptions:string[]=['option1', 'option2'];
  dataAndFileDocForm!:FormGroup
  constructor(){}
  // @Output('dataAndFileDoc') dataAndFileDoc = new EventEmitter()

  
 ngOnInit(): void {

    // this.dataAndFileDoc.emit(this.dataAndFileDocForm.value)
    this.dataAndFileDocForm = new FormGroup({

      dataOfAppointment:new FormControl('') ,
      dataOfJoining:new FormControl('',[Validators.required]) ,
      dateOfConfirmation:new FormControl('') ,
      ////////////////////////////////////////////////////////////
      probationPeriodNumber:new FormControl('') ,
      probationPeriod:new FormControl('') ,
      probationPeriodEndDate:new FormControl('') ,
      ////////////////////////////////////////////////////////////
      contractStartingDate:new FormControl('',[Validators.required]) ,
      expiryDateOfContract:new FormControl('',[Validators.required]) ,
      ////////////////////////////////////////////////////////////
      noticPeriodNumber:new FormControl('') ,
      noticPeriod:new FormControl('') ,
      contractPlace:new FormControl('',[Validators.required]) ,
      ////////////////////////////////////////////////////////////
      temporary:new FormControl('') ,//button will change
      permanent:new FormControl('') ,//button will change
      ////////////////////////////////////////////////////////////
      isHalfTime:new FormControl('') ,
      ////////////////////////////////////////////////////////////
      cader:new FormControl('') ,
      travelingTicet:new FormControl('') ,
      ////////////////////////////////////////////////////////////
      basicSalary:new FormControl('',[Validators.required]) ,
      housingAllounce:new FormControl('') ,
       ////////////////////////////////////////////////////////////
      socialSubscription:new FormControl('') ,
      ////////////////////////////////////////////////////////////
      paymentMethod:new FormControl('',[Validators.required]) ,
      ////////////////////////////////////////////////////////////
      //table
      ////////////////////////////////////////////////////////////
      remarks:new FormControl('') ,
      ////////////////////////////////////////////////////////////
    })
  }

  


}
