import React, { Component } from "react";
import Home from "./Home/home";
import data from "./Data/Data";
class App extends Component {

  // state= {
  //   data: data
  // }
  render() {
    // let response = this.state.data.map((value, index) => {
    //   return<div>
    //     <h1>something: {value.nav[0].phone_no}</h1>
    //   </div>
       
      
    // })
    
    return (
    <div>
      {/* {response} */}
      <Home data={this.state.data}/>

      
    </div>
    );
  }
}
export default App;
