import React, { Component } from "react";
class About extends Component {
  render() {
   console.log(this.props.about)
    return (
      <div className="about text-muted">
        <div className="container">
          <div className="col-md-12">
            <div className="col-md-6">
              <h1 className="text-primary pt-5 pb-4 mt-5">{this.props.about[0].title}</h1>
              <p>{this.props.about[0].description}
<br/><br/>
{this.props.about[0].description_part}
<br/><br/>
As a finance team, we tend to our client’s financial goals, guiding them to make the best investments. We further help them align these investments according to changing market values and adjust their portfolios from time to time. Our services include FSCS protected funds and savings options like term savings deposit accounts, fixed-term bonds, global bond index funds, ETFs and index-linked funds.
</p>
            </div>
            <div className="col-md-6 pt-5 mt-5">
              <img className="pt-5" src="./images/independent-investements.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
   


    );
  }
}
export default About;
