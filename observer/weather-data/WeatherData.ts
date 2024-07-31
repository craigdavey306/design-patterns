import { Observer } from './Observer';
import { Subject } from './Subject';

export class WeatherData implements Subject {
  private temperature = 0;
  private humidity = 0;
  private pressure = 0;
  constructor(private observers: Observer[]) {}

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObserver(): void {
    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidity, this.pressure)
    );
  }

  measurementsChanged(): void {
    this.notifyObserver();
  }

  setMeasurments(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
