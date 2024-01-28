import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DataAndFileDocComponent } from '../data-and-file-doc/data-and-file-doc.component';
import { AddressContactInfoComponent } from '../address-contact-info/address-contact-info.component';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { AlldataService } from '../alldata.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    DataAndFileDocComponent,
    AddressContactInfoComponent,
    GeneralInfoComponent,
    ReactiveFormsModule

],
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit{
 
  panelOpenState!:boolean;
  panelOpenState2!:boolean;
  panelOpenState3!:boolean;

  dataFromGeneralInfo!:any;
  id = '';
  formData = '';

  constructor(private _AlldataService:AlldataService){}

  generalInfoData(eventData:{title:string, data:string}){
    this.dataFromGeneralInfo = eventData ;
  }
  saveAllData(){
    const generalData = this.dataFromGeneralInfo.value;
    //const generalData =  JSON.stringify(this.dataFromGeneralInfo.value);

    this._AlldataService.generalData(generalData)

  }
  ngOnInit(): void {
   this.showFormData()
  }

  showFormData(){
    
    this._AlldataService.getData().subscribe(
      (formDataArr) =>{
        formDataArr.forEach(obj=>{
        this.id = obj.id;
        this.formData = obj.value
      })
      console.log(this.id, this.formData);
      }
    )
  }
  cancelData(){
  //   this._AlldataService.deleteFormData(this.id).subscribe(response =>{
  //     console.log(response);
      
  //   })
  }

 

}
