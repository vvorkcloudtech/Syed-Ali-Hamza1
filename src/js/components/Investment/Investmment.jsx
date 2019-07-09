import React, { Component } from "react";
class Projects extends Component {
  render() {
    
    return (
   
      <div className="investments">
        <div className="row">
          <div className="container">
            <h3 className="text-primary text-center my-5 pt-5">We help our clients achieve their financial goals with 100% capital protection.</h3>
            <div className="col-md-6">
              <p>As a leading investment firm with access to some of the high performing investment funds in the UK, we handle investments from as low £5,000 to £1,000,000+ and deliver consistent returns to all our clients.
<br/><br/>
We bring the best possible financial gains to each and every one of our client and ensure 100% capital protection all the while. Our ongoing conversations with them help in maintaining better client relationships and understand their financial goals better. With this information, we further help perfect the portfolios through continuous assessments. We also provide a clear stress-free exit strategy to our clients, making business with us completely hassle-free.
<br/><br/>
For more information, feel free to contact us by email or phone. We are happy to help always.</p>
            </div>
            <div className="col-md-6">
              <img className="h-50 w-100" src="./images/happy-family.jpg" alt=""/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="col-md-7">
            <h2 className="text-primary">Compound Interest Calculator</h2>
            <p>To effectively grow your wealth, you must systematically fund your investments over a period of time. This can be added as smaller deposits to a savings account, from where you can divert to other plans at a later time.
<br/><br/>
TOur compound interest calculator will help you understand how this strategy could work in your favour.</p>

            </div>

            <div className="col-md-5 bg-secondary  py-4">
            <div className="d-flex">
            <div className="form-group col-md-6">
              <label htmlFor="">Principal Amount:</label>
              <input type="number" className="form-control"/>
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="">Interest Rate:</label>
              <input type="number" className="form-control"/>
              </div>
              </div>
              <div className="d-flex">
              <div className="form-group col-md-6">
              <label htmlFor="">Compounded:</label>
              <select class="form-control" style={{ height:"30px"}}>
                <option className=""> Which relevant option are you interested in?</option>
                <option> Deposit &amp; Savings</option>
                <option> Bond Funds</option>
                <option> Equity Funds</option>
                <option> Fixed Rate Bonds</option>

                </select>
              </div>
              <div className="form-group col-md-6">
              <label htmlFor="">Period (months):</label>
              <input type="number" className="form-control"/>
              </div>
              </div>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
