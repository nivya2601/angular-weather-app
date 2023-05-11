import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ForecastService {


  constructor(private http:HttpClient) { }
  getWeatherForecast(){
    return new Observable((observer)=>{
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          observer.next(position);
        },
        (error)=>{
          observer.next(error);
        }
      )
    }).pipe(
      map((value:any)=>{
        return new HttpParams()
        .set('lat',value.coords.latitude)
        .set('lon',value.coords.longitude)
        .set('units','metric')
        .set('appid','899b64e2d7ada64524db19441826d557')
      }),
      switchMap((values)=>{
          return this.http.get('http://api.openweathermap.org/data/2.5/forecast',{params:values})
        })
      )
  }
 
  
}
 
