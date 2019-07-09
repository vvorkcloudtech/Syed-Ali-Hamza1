import React, { Component } from "react";
class BlogPost extends Component {
  render() {
    
    return (
   <div>
    <div className="row mb-5">
      <div className="container">
        <h1 className="text-center text-primary mt-5 pt-5">Happy Clients</h1>
        <p className="text-center mb-5 pb-5">See what our happy clients got to say about us</p>
        <div className="col-md-4">
          <div className="card border-0 d-flex justify-content-center align-items-center">
            <div className="card-body text-center">
            <img src="./images/testi-1.jpg" alt="" className="border mb-5 h-50 w-50"/>
              <p>
            " Independent investors have been managing my portfolios for more than 5 years now. Apart from helping me make sound financial decisions, the further ensure that every penny you invest is accounted for. I am truly happy with their work. “

              </p>
              <h5>TERRY PARKER</h5>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="card border-0 d-flex justify-content-center align-items-center">
            <div className="card-body text-center">
            <img src="./images/testi-2.jpg" alt="" className="border mb-5 h-50 w-50"/>
              <p>
              " I have invested with various other investment firms in the UK, but none has exceeded my expectations like Independent Investors. Their personalized services ensured stable and consistent returns. The team is professional yet very approachable and has helped me gain the best returns from the investments. I would definitely recommend them to my acquaintances. “

              </p>
              <h5>TERRY PARKER</h5>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="card border-0 d-flex justify-content-center align-items-center">
            <div className="card-body text-center">
            <img src="./images/testi-3.jpg" alt="" className="border mb-5 h-50 w-50"/>
              <p>
              “The personalized services from Independent investors has always helped me with my financial goals. The team is highly proactive and available to answer queries at all times. I would highly recommend their services."

              </p>
              <h5>TERRY PARKER</h5>
            </div>
            </div>
        </div>
      </div>
    </div>
   </div>
        
  
    );
  }
}
export default BlogPost;
