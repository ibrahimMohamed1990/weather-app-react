import React , {Component} from 'react';
import Weather from './component/Weather'
import Form from './component/Form'
import './App.css';
 
class App extends Component {
  
  state = {
     country: '',
     coord : '',
     temp : '',
     humidity : '',
     description : '',
     error : '',
  }
  getWeather = async (e) => {
    
  e.preventDefault()
  const city = e.target.elements.city.value
  const country = e.target.elements.country.value
  const key = "8b71b7c4f012a495b4b36591590f9db2"
  const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`)
   const data = await api.json()
   console.log(data)
   if(city && country && data.main){
   this.setState({
     
        humidity : data.main.humidity ,
        country: data.sys.country,
        coord : data.coord.lon +','+ data.coord.lat,
        temp : data.main.temp,
        description : data.weather[0].description,
        error : '',

   })
  } else {
    this.setState({
      humidity :'' ,
      country: '',
      coord : '',
      temp : '',
      description : '',
      error : 'please enter data !',

 })
  }
} 
render(){ 
  return (
    <div className="wrapper">
      <div className="form">
      <Form getWeather={this.getWeather}/>
      <Weather
       humidity={this.state.humidity}
       country={this.state.country}
       coord={this.state.coord}
       temp={this.state.temp}
       description={this.state.description}
       error={this.state.error}
        />
    </div>
     </div>
  );
} 
} 
export default App;
