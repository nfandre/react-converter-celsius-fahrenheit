import React from 'react';
import './App.css';
import Celsius from './AppCelsius.js';
import Fahrenheit from './AppFahrenheit.js';

class App extends React.Component {
  constructor(props){
	super(props);
	this.state = {
		temperatura: 0,
		escala: 'celsius'
	};
	this.updateFahrenheit = this.updateFahrenheit.bind(this);
  	this.updateCelsius = this.updateCelsius.bind(this);
	this.temperaturaFahrenheit = this.temperaturaFahrenheit.bind(this);
	this.temperaturaCelsius = this.temperaturaCelsius.bind(this);
  }

  updateFahrenheit(value){
  	this.setState ({
		fahrenheit:value
	});

  }
  updateCelsius(){
	
  }

  temperaturaCelsius(){
	if(this.state.escala ==='celsius'){
		return this.state.temperatura;
	}
  }
  temperaturaFahrenheit(){
	if(this.state.escala === 'fahrenheit'){
		return this.state.temperatura;
		
	}

  }	  
  render(){
    var celsius = this.temperaturaCelsius();
    var fahrenheit = this.temperaturaFahrenheit();	  
    return(	   
    <div className="App">
 
  	<Celsius
	    celsius = {celsius}
	    update = {this.updateFahrenheit}				

	/>

	<Fahrenheit 
	    fahrenheit = {fahrenheit}
	    update = {this.temperaturaCelsius}
	/>
   
    </div>
  );
  }	  
}

export default App;
