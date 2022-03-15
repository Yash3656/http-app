import { Component, OnInit } from '@angular/core';
import { Ap1Service } from '../ap1.service';
import { Customer1 } from '../customer-1';

@Component({
  selector: 'app-new-https',
  templateUrl: './new-https.component.html',
  styleUrls: ['./new-https.component.css']
})
export class NewHttpsComponent implements OnInit {
    title ="http-app";
    Customers:any =[];

    constructor(private ap1Service: Ap1Service){}
    ngOnInit(){
      this.ap1Service.getCustomers().subscribe((data)=>{
        this.Customers = data;
      });
    }

}
