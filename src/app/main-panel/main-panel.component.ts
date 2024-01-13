import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DataAndFileDocComponent } from '../data-and-file-doc/data-and-file-doc.component';
import { AddressContactInfoComponent } from '../address-contact-info/address-contact-info.component';
import { GeneralInfoComponent } from '../general-info/general-info.component';

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    DataAndFileDocComponent,
    AddressContactInfoComponent,
  GeneralInfoComponent],
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent {

}
