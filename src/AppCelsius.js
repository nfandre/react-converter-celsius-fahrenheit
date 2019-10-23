import React from 'react';
import './App.css';

class Celsius extends React.Component {
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
	
	 }

	handleChange(event){
		this.props.update(event.target.value);
	}

	render(){
	return (
       		 <div className="Celsius">
			<p>Celcius:
				<input type="text" value={this.props.celsius}  onChange={this.handleChange}  ></input>
				
			</p>
       		 </div>
	
			      
	);
		
	}
}
export default Celsius;
    
