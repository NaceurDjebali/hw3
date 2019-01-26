import React, { Component } from 'react';
import './App.css';


const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {

  
  

  render() {
    
    return (

      <div className="App" style={{backgroundColor: background} }>

      <p> Choose Computer Model </p>
        
        <select value={this.state}>
          <option value=""> Choose Model </option> 
          
        </select>

        <button onClick={this.state}> Add </button> 

      </div>
    );
  }
}
const background = '#696969'

const mapStateToProps = state => {
  return {
  }
};

export default App

