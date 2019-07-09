import React, { Component } from "react";
class Header extends Component {
  render() {
    // console.log(this.props.investments_per[0].percentage)
    return (
      <div>
    <div className="header" style={{backgroundImage:this.props.header[0].header_main_img, backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div className="container">
      <div className="d-flex row">
        <div className="col-md-6">
        <div>
  <h4 className="text-primary pt-5 mt-5">{this.props.header[0].header_title}</h4>
      <h1 className="py-3 display-2 pb-4">{this.props.header[0].yearly_per}</h1>
      </div>
       <div className="d-flex flex-column">
      <div className="d-flex mb-2">
      <i class="far fa-check-square text-success" style={{fontSize:"20px"}}></i>
      <p className="h4" style={{marginTop:"0px"}}><strong>{this.props.header[0].per_value[0].type}</strong>{this.props.header[0].per_value[0].investment}</p>
      </div>
      <div className="d-flex mb-2">
      <i class="far fa-check-square text-success" style={{fontSize:"20px"}}></i>
      <p className="h4" style={{marginTop:"0px"}}><strong> {this.props.header[0].per_value[1].type}</strong> {this.props.header[0].per_value[1].investment}</p>
      </div>
      <div className="d-flex mb-2">
      <i class="far fa-check-square text-success" style={{fontSize:"20px"}}></i>
      <p className="h4" style={{marginTop:"0px"}}><strong>{this.props.header[0].per_value[2].type}</strong> {this.props.header[0].per_value[2].investment}</p>
      </div>
      <div className="d-flex mb-2">
      <i class="far fa-check-square text-success" style={{fontSize:"20px"}}></i>
      <p className="h4" style={{marginTop:"0px"}}><strong>{this.props.header[0].per_value[3].type}</strong>  {this.props.header[0].per_value[3].investment}</p>
      </div>
      </div>
      </div>
      
      <div className="col-md-2 my-auto">
        <img src="./images/offer-new.png" alt=""/>
      </div>
      <div className="col-md-4 row bg-white">
        <form action="" className="col-md-12">
          <h4 className="text-center pt-4"> {this.props.header[1].title}</h4>
          <p className="text-center pb-4 mb-4">{this.props.header[1].description}</p>
          <div className="d-flex">
            <div class="form-group col-md-6"> 
        <input class="form-control" type="text" placeholder={this.props.header[1].form_name}/>
            </div>
            <div class="form-group">
                <input class="form-control" type="phone" placeholder={this.props.header[1].form_phone}/>
            </div>
            </div>
            <div class="form-group col-md-12">
                <input class="form-control" type="email" placeholder={this.props.header[1].form_emailAddress}/>
            </div>
            
            <div class="form-group col-md-12">
            <select class="form-control" style={{ height:"30px"}}>
                <option className=""> {this.props.header[1].form_question}</option>
                <option> {this.props.header[1].form_question_options[0].option
                }</option>
                <option> {this.props.header[1].form_question_options[1].option
                }</option>
                <option> {this.props.header[1].form_question_options[2].option
                }</option>
                <option> {this.props.header[1].form_question_options[3].option
                }</option>

                </select>
            </div>

            <div class="form-group col-md-12">
            <select class="form-control"  style={{ height:"30px"}}>
                <option className="active"> {this.props.header[1].form_sum}</option>
                <option> {this.props.header[1].form_sum_options[0].option} </option>
                <option> {this.props.header[1].form_sum_options[1].option}</option>
                <option> {this.props.header[1].form_sum_options[2].option}</option>

                </select>
            </div>
            
           
    
            <button class="btn btn-success d-block w-100 col-md-12"> {this.props.header[1].form_btn}</button>
        </form>
      </div>
      </div>



      </div>
    </div>

    <div className="award row text-center mb-5 p-0 m-0">
      <div className="container">
        <div className="card-group">
        <div className="card col">
          <div className="card-body">
            <h1 className="text-primary display-1">{this.props.header1[0].percentage}</h1>
            <p className="text-muted h4">{this.props.header1[0].description}</p>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h1 className="text-primary display-1">{this.props.header1[1].percentage}</h1>
            <p className="text-muted h4">{this.props.header1[1].description}</p>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h1 className="text-primary display-1">{this.props.header1[2].percentage}</h1>
            <p className="text-muted h4">{this.props.header1[2].description} </p>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h1 className="text-primary display-1">{this.props.header1[3].percentage}</h1>
            <p className="text-muted h4">{this.props.header1[3].description}</p>
          </div>
        </div>
        </div>

      </div>
    </div>

    </div>
    );
  }
}
export default Header;
