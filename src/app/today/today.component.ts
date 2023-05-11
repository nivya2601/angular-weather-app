import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat!: number;
  lon!: number;
  weather: any;
  city:string='Thrissur';
  units:string='imperial';
  currentTime=new Date();
  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.geolocation();
  }
geolocation(){
  if('geolocation' in navigator){
    navigator.geolocation.watchPosition((success)=>{
      this.lat=success.coords.latitude;
      this.lon=success.coords.longitude
  this.weatherService.getWeatherDatabyCoords(this.lat,this.lon).subscribe(data=>{
    this.weather=data
  })
    })
  }
}
getCity(city: string){
  this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{
    this.weather=data;
  })
}
getZipcode(zip:string){
  this.weatherService.getWeatherDataByZip(zip).subscribe(data=>{
    this.weather=data;
  })
}
}
