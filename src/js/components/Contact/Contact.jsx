import React, { Component } from "react";
class Awards extends Component {
  render() {
    
    return (
    <div>
      <div className="row mb-5">
        <div className="container pt-5 mt-5">
          <div className="col-md-5">
          <form action="" className="col-md-12">
          <h3 className="text-center mb-5">Achieve Your Financial Goals By Investing With Us Today!</h3>
         
          <div className="d-flex">
            <div class="form-group col-md-6"> 
        <input class="form-control" type="text" placeholder="Name"/>
            </div>
            <div class="form-group">
                <input class="form-control" type="phone" placeholder="phone"/>
            </div>
            </div>
            <div class="form-group col-md-12">
                <input class="form-control" type="email" placeholder="Email Address"/>
            </div>
            
            <div class="form-group col-md-12">
            <select class="form-control" style={{ height:"30px"}}>
                <option className=""> Which relevant option are you interested in?</option>
                <option> Deposit &amp; Savings</option>
                <option> Bond Funds</option>
                <option> Equity Funds</option>
                <option> Fixed Rate Bonds</option>

                </select>
            </div>

            <div class="form-group col-md-12">
            <select class="form-control"  style={{ height:"30px"}}>
                <option className="active"> Investment Sum</option>
                <option> $5000 - 25000 </option>
                <option> $25000 - 50000</option>
                <option> 30000- 40000</option>

                </select>
            </div>
            
           
    
            <button class="btn btn-success d-block w-100 col-md-12"> Contact Us</button>
        </form>
          </div>
          <div className="col-md-7">
            <h4 className="text-primary">REACH OUT TO US FOR CUSTOM FINANCIAL COUNSEL AND GUIDANCE.</h4>
            <p>We are a team of investment specialists focused on bringing you tailored investment plans to help you realise your financial goals.

</p>
<h4 className="text-primary">HAVE ANY QUESTIONS? REACH US BY PHONE.</h4>
<p>Call us on <strong>+44 203 695 1157</strong></p>
<h4 className="text-primary">GET MORE INFO QUICKLY.</h4>
<p>Fill in the form at left and we will contact you within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Awards;
