    
import React from 'react';
import './App.css';

class Fahrenheit extends React.Component {
	constructor(props){
		super(props);
	}


	handleChange(event){
		this.props.updateFarenheit();
	}
render(){

	return (
       		 <div className="Fahrenheit">
			<p>Fahrenheit
				<input type="text" value={this.props.fahrenheit} ></input>

			</p>
       		 </div>
			      
	);
	}
}
export default Fahrenheit;
    
