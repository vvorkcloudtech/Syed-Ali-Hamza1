import React, { Component } from "react";
class Services extends Component {
  render() {
    console.log(this.props)
    return (
    <div className="services">
      
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-primary text-center py-5">{this.props.services[0].title}</h1>
              <div className="col-md-4">
              <div className="card">
                <div className="card-body row">
                  <div className="col text-right">
                  <h4 className="text-primary ">{this.props.services[0].offer_detail1[0].title}</h4>
                  <p>{this.props.services[0].offer_detail1[0].description}</p>
                  </div>
                  <div className="col-2"><img className="w-100" src="./images/independent-investors-logo (2).png" alt=""/></div>
                </div>
              </div>
              <div className="card">
                <div className="card-body row">
                  <div className="col text-right">
                  <h4 className="text-primary ">{this.props.services[0].offer_detail1[1].title}</h4>
                  <p>{this.props.services[0].offer_detail1[1].description}</p>
                  </div>
                  <div className="col-2"><img className="w-100" src="./images/independent-investors-logo (2).png" alt=""/></div>
                </div>
              </div>
              <div className="card">
                <div className="card-body row">
                  <div className="col text-right">
                  <h4 className="text-primary ">{this.props.services[0].offer_detail1[2].title}</h4>
                  <p>{this.props.services[0].offer_detail1[2].description}</p>
                  </div>
                  <div className="col-2"><img className="w-100" src="./images/independent-investors-logo (2).png" alt=""/></div>
                </div>
              </div>
              </div>
              <div className="col-md-4 my-auto">
                <img className="w-100" src={this.props.services[0].offer_img} alt=""/>
              </div>
              <div className="col-md-4">
              <div className="card">
                <div className="card-body row">
                  <div className="col-2"><img className="w-100" src="./images/independent-investors-logo (2).png" alt=""/></div>
                  <div className="col text-left">
                  <h4 className="text-primary ">{this.props.services[0].offer_detail2[0].title}</h4>
                  <p>{this.props.services[0].offer_detail2[0].description}</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body row">
                  <div className="col-2"><img className="w-100" src="./images/independent-investors-logo (2).png" alt=""/></div>
                  <div className="col text-left">
                  <h4 className="text-primary ">{this.props.services[0].offer_detail2[1].title}</h4>
                  <p>{this.props.services[0].offer_detail2[1].description}</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body row">
                  <div className="col-2"><img className="w-100" src="./images/independent-investors-logo (2).png" alt=""/></div>
                  <div className="col text-left">
                  <h4 className="text-primary ">{this.props.services[0].offer_detail2[2].title}</h4>
                  <p>{this.props.services[0].offer_detail2[2].description}</p>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
export default Services;
