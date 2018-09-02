import { Component, OnInit, Input } from '@angular/core';
import { CarouselConfigService } from '../carousel-config.service';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input()

  taskObj:object;
  taskArray: Array<any>;
  customersObj:object;
  lessCode = 
  `@base: #f938ab;
  .box-shadow(@style, @c) when (iscolor(@c)) {
    box-shadow:         @style @c;
    -webkit-box-shadow: @style @c;
    -moz-box-shadow:    @style @c;
  }
   
  .box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
      .box-shadow(@style, rgba(0, 0, 0, @alpha));
  }
   
  .box {
    color: saturate(@base, 5%);
    border-color: lighten(@base, 30%);
    div {
      .box-shadow(0 0 5px, 30%)
    }
  }
  `;
  compiledCode = `
  .box {
    color: #fe33ac;
    border-color: #fdcdea;
  }
  .box div {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }`;

  constructor(private config: CarouselConfigService, private httpRequest: RequestService ) { 
    // this.config.inter
  }

  ngOnInit() {
    this.getTasks();
    this.getCountries();
  }

  getTasks(){
    this.httpRequest.getTasks()
      .subscribe((data)=> {
        this.taskObj = data;
        this.taskArray = data["frontend_home_questionnaire"]['tasks'];
      })
  }

  getCountries(){
    this.httpRequest.getCountries()
        .subscribe((data) => {
          this.customersObj = data;
          console.log(this.customersObj)
          let cities = [];
          let countries = [];
          this.customersObj['Customers'].forEach(element => {
            if (!countries.includes(element['Country'])) countries.push(element['Country'])
            if (!cities.some(e => e.City == element['City'])){
            // if (!cities.includes(element['City'])) 
              let city = { 'City': element['City'], 'Country': element['Country'] }
              cities.push(city);
            }
          });
          this.customersObj = { 'countries': countries, 'cities': cities };
        });
      
  }

}
