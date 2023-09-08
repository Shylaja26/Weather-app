import { Component , OnInit} from '@angular/core';
import { WeatherService } from '../service/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent  implements OnInit  {

  constructor(private service:WeatherService){}

  myWeather : any; 
  Temperature : number = 0;
  minTemp : number = 0;
  maxTemp : number = 0;
  Humidity: number = 0;
  windSpeed: number =0;
  cityName  : string  = "chennai";
  units : string = 'imperial';


  ngOnInit() {
    this.Data(this.cityName , this.units);
    this.cityName = '' ;

  }
  
  onSubmit(){
    this.Data(this.cityName , this.units);
    this.cityName = '' ;
  }
   
  private  Data(cityName : string , units : string){
    this.service.getWeatherData(cityName, units).subscribe({
      next: (response) =>{
      //  console.log(response);
       this.myWeather = response
       console.log(this.myWeather);
   
       this.Temperature = this.myWeather.main.temp
       this.minTemp = this.myWeather.main.temp_min
       this.maxTemp = this.myWeather.main.temp_max
       this.Humidity = this.myWeather.main.humidity
       this.windSpeed = this.myWeather.wind.speed
   
      },
   
       error: (error) => console.log(error),
   
       complete : () => console.info("API is completed ")
       })
     

  }

}