import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http:HttpClient) { }

  getWeatherData(cityName : string , units : string){
  return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=8689b3f34b109367f66725682668e0a4&units=' + units);
  }
}
