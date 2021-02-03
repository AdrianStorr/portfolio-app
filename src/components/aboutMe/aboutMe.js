import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function body(props) {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
         </h3>
            </div>
            <div className="card-body">
                        <blockquote className="blockquote mb-0">
          <div className="row">
         <div className="col-md-3">
       <img id="pic" src="https://avatars0.githubusercontent.com/u/56319950?s=460&u=29ea5c9829ccb251f4c3e739338f1ba870b5ce7d&v=4" alt="profile pic" width="100%" height="auto%" />
      </div>

    <div className="col-md-8">

     <p>My name is Adrian Storr. I am a junior web developer currently registered with John Hopkins Coding Bootcamp, which I will complete in February 2021.</p>
    
    <p>My background is the completion of university and high school. I have a Bachelor's degree in project management, along with a professional certification in 
        supply chain project management from Georgia Tech University.
         I was also a co-owner of a clothing boutique responsible for transforming and empty store space, promotion, inventory, vendor selection and distributing salaries.
         </p>
        
    <p>My next work is hopefully a full stack developer. I hope to gain enough knowledge to work in this sphere and gain even more experience.</p>
<p>During my free time I like to read, develope projects and play golf.</p>
 </div>
  </div>
   </blockquote>
   </div>
 </div>
            </div>

        </div>
            )
        }
export default body