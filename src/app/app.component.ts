import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'http-app';
  Customers:any =[];
  constructor(private apiService: ApiService){}

  ngOnInit(){

    this.apiService.getCustomers().subscribe((data)=>{
     this.Customers = data;
    });

}
}

/*
export class AppComponent{
  title ="http-app";
  Customers:any =[];
  constructor(private ap1Service: Ap1Service){}
  ngOnInit(){
    this.ap1Service.getCustomers().subscribe((data)=>{
      this.Customers = data;
    });
  }
}
*/
