import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';




const MaterialComponents =[
  MatMenuModule,
  MatCardModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatTabsModule,
  MatListModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatTableModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatButtonModule,

]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ],
   
  
})
export class MaterialModule { }
