import { CurrentConditionsDisplay } from './CurrentConditionsDisplay';
import { WeatherData } from './WeatherData';

const weatherData = new WeatherData([]);
const curentDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurments(80, 65, 30.4);
weatherData.setMeasurments(82, 70, 29.2);
