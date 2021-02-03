import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://adrianstorr.github.io/Weather-Dashboard-app/">
                                    <img src="Assets/weather-app.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Weather Dashboard</p>
                                <p id="repo"><a href="https://github.com/AdrianStorr/Weather-Dashboard-app">https://github.com/AdrianStorr/Weather-Dashboard-app</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://drive.google.com/file/d/1e93bwgnMhm7jqi-4lN2EWITR14xr717C/view?usp=sharing">
                                    <img src="Assets/ems.png"
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">Employee Generator</p>
                                <p id="repo"><a href="https://github.com/AdrianStorr/Employee-generator"
                                >https://github.com/AdrianStorr/Employee-generator</a></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://adrianstorr.github.io/code-quiz/">
                                    <img src="Assets/codequiz.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Code Quiz</p>
                                <p id="repo"><a href="https://github.com/AdrianStorr/code-quiz"
                                >https://github.com/AdrianStorr/code-quiz</a></p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://chernanma.github.io/Project_1">
                                    <img src="Assets/covid19.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project-1</p>
                                <p id="repo"><a href="https://chernanma.github.io/Project_1/"
                                >https://github.com/chernanma/Project_1</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="https://peaceful-beyond-40794.herokuapp.com/">
                                    <img src="Assets/budgettracker.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Budget Tracker</p>
                                <p id="repo"><a href="https://github.com/AdrianStorr/Pwahomework"
                                >https://github.com/AdrianStorr/Pwahomework</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://vast-woodland-01889.herokuapp.com/">
                                    <img src="Assets/bikeshop.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project 2: Bike Shop App</p>
                                <p id="repo"><a href="https://github.com/chernanma/BikeShopApp"
                                >https://github.com/chernanma/BikeShopApp</a></p>

                            </div>
                        </div>
                        <br></br>
                        <div className="gitProfile">
                            <p>GitHub Profile: <a href="https://github.com/AdrianStorr">
                            https://github.com/AdrianStorr</a> </p>
                            <p>Linkedin Profile: <a href="https://www.linkedin.com/in/adrian-storr-98773731"
                            >https://www.linkedin.com/in/adrian-storr-98773731</a></p>
                            <p>Email Address: Adrianloves123@gmail.com</p>
                            <p>Phone Number:(850)-890-5740</p>
                            <a href="./resumeUpdate.pdf"
                            > Resume</a>

                        </div>
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio