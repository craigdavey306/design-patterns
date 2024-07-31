import { DisplayElement } from './DisplayElement';
import { Observer } from './Observer';
import { WeatherData } from './WeatherData';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperaure = 0;
  private humidity = 0;
  private pressure = 0;
  constructor(private weatherData: WeatherData) {
    this.weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number): void {
    this.temperaure = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperaure}F degrees and ${this.humidity}% humidity.`
    );
  }
}
