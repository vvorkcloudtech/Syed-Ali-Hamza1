import React, { Component } from "react";
import Nav from "../Nav/nav";
import Header from "../Header/header";
import About from "../About/about";
import Investment from "../Investment/Investmment";
import Services from "../Services/Services";
import Clients from "../Clients/Clients";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
class Home extends Component {
  render() {
   
    return (
      
    <div>
      
      

        {/* <Nav nav={this.props.data[0].nav}/>
         <Header header={this.props.data[0].header} header1={this.props.data[0].investments_per}/>
        <About about={this.props.data[0].about_company}/>
        <Services services={this.props.data[0].offer}/>
        <Investment investment={this.props.data[0].footer_detail} />
        <Clients clients={this.props.data[0].footer_detail} />
        <Contact contact={this.props.data[0].footer_detail} />
        <Footer footer={this.props.data[0].footer_detail}/> */}
    </div>
    );
  }
}
export default Home;
