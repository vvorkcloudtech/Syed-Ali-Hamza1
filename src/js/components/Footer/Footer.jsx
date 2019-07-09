import React, { Component } from "react";
class Footer extends Component {
  render() {
    
    return (
    <div>
        <div className="row bg-primary">
            <div className="container my-5">
                <div className="col-md-3">
                    <h3>{this.props.footer[0].contact_title}</h3>
                    <p>{this.props.footer[0].address}</p>
<strong>Phone: {this.props.footer[0].phone_no}</strong>
                </div>
                <div className="col-md-9">
<h3>{this.props.footer[1].contact_about_title}</h3>
<p>{this.props.footer[1].description}</p>
                </div>
            </div>
        </div>
        <div className="row bg-info text-white d-flex justify-content-center align-items-center p-3">
            <p className="h4">{this.props.footer[2].copyright}</p>
        </div>
    </div>
    );
  }
}
export default Footer;
