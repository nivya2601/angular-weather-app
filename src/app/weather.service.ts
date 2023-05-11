import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url='https://api.openweathermap.org/data/2.5/weather';
  apiKey='899b64e2d7ada64524db19441826d557';

  constructor(private http:HttpClient) { }

  getWeatherDatabyCoords(lat: any,lon: any){
    let params= new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('units','metric')
    .set('appid','899b64e2d7ada64524db19441826d557')
    return this.http.get(this.url,{params});
   }
   getWeatherDataByCityName(city:string){
      let params = new HttpParams()
      .set('q',city)
      .set('units','metric')
      .set('appid',this.apiKey)
      return this.http.get(this.url,{params});

   }
   getWeatherDataByZip(zip:string){
    let params=new HttpParams()
    .set('zip',zip)
    .set('units','metric')
    .set('appid',this.apiKey)
    return this.http.get(this.url,{params})
   }
}
