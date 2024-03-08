import { AfterViewInit, Component,  OnInit,  ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { AlldataService } from 'src/app/alldata.service';
import { RouterLink } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, MaterialModule,RouterLink,EmployeeComponent, FormsModule, HttpClientModule,SearchPipe,
    AngularFirestoreModule],
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements AfterViewInit,OnInit {
  employeeName:string = '';
  AllEmployeeData!:any[];
  displayedColumns:string[]= 
  ['id', 'fNameinE','localAddress','gender','nationality','BasicSalary', 'menu']
  dataSource = new MatTableDataSource(this.AllEmployeeData) 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 
  constructor(private _AlldataService:AlldataService,
    private _AngularFirestore: AngularFirestore,

  ){}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.allEmployees();
  }
  allEmployees(){
    this._AngularFirestore.collection<object>('employees').snapshotChanges().pipe(
      map(actions => actions.map((a) =>{
        const data = a.payload.doc.data() as object;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(
      res =>{
        this.AllEmployeeData = res;
        console.log(this.AllEmployeeData);
      }
    )
    
    
  }
  

  deleteEmployee(id:string){
      return this._AngularFirestore.doc('employees/'+ id).delete();
    
  }

  applyFilter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSource.filter = filterValue.trim().toLowerCase();

    
  }



}
