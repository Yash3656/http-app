import { Component, OnInit } from '@angular/core';
import { Ap1Service } from '../ap1.service';
import { Customer1 } from '../customer-1';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  Customers:any =[];

  constructor(private ap1Service: Ap1Service){}
  ngOnInit(){
    this.ap1Service.getCustomers().subscribe((data)=>{
      this.Customers = data;
    });
  }
}
