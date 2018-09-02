import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  tasksUrl = 'assets/home_assignment.json';
  // customersObj= new Observable<any>();

  constructor(private http: HttpClient) { }

  getTasks(){
      return this.http.get(this.tasksUrl);
  }

  getCountries(){
    return this.http.get('http://northwind.servicestack.net/customers.json');
    // console.log(customers)
    // let cities = [];
    // let countries = [];
    // customers['Customers'].forEach(element => {
    //   if(!countries.includes(element['Country'])) countries.push(element['Country'])
    //   if(!cities.includes(element['City'])){
    //     let city = { 'City': element['City'], 'Country':element['Country']}
    //     cities.push(city);
    //   }
    // });
    // this.customersObj = {'countries': countries, 'cities': cities};

    // return this.customersObj;
  }
}
