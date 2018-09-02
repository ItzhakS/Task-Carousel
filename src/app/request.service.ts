import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  tasksUrl = 'assets/home_assignment.json';

  constructor(private http: HttpClient) { }

  getTasks(){
    return this.http.get(this.tasksUrl);
  }

  getCountries(){
    return this.http.get('http://northwind.servicestack.net/customers.json');
  }
}
