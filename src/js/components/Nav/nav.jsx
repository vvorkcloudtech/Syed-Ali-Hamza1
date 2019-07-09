import React, { Component } from "react";
class Nav extends Component {
  render() {
    console.log(this.props)
 let response = this.props.nav.map((value, index) => {
     return( <div className="row container-fluid" >
         <nav className="navbar navbar-expand-md navbar-light bg-light col-12 sticky-top">
            <a href="#" class="navbar-brand col-3 offset-md-1"> 
                <img src="./images/independent-investors-logo.png" alt=""/>
            </a>
            <button class="navbar-toggler" data-target="#mainNav" data-toggle="collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse col-8" id="mainNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" class="nav-link">{value.nav_link[0].link} </a></li>
                    <li class="nav-item"><a href="#" class="nav-link">{value.nav_link[1].link}</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">{value.nav_link[2].link}</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">{value.nav_link[3].link}</a></li>
                    <li class="nav-item ml-5 pl-5"><button className="btn btn-primary px-5"><i class="fas fa-phone-alt text-white"></i>
                    {value.phone_no}</button></li>
                </ul>
            </div>

        </nav>

     </div>  )
    })
   
    return (

       <div>
         
         {response}

       </div>
    )
    
  
    
}
}
export default Nav;
