import { Component, OnInit } from '@angular/core';
import { ForecastService } from './forecast.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  title = 'weather-app';
  constructor(){}
  ngOnInit(): void {
    
  }
 
  }


