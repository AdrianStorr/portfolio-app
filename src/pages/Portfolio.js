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

                            <div className="col-md-5">
                                <a href="https://adrianstorr.github.io/Weather-Dashboard-app/">
                                    <img src="https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Weather Dashboard</p>
                                <p id="repo"><a href="https://github.com/AdrianStorr/Weather-Dashboard-app">https://github.com/AdrianStorr/Weather-Dashboard-app</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <a href="https://drive.google.com/file/d/1e93bwgnMhm7jqi-4lN2EWITR14xr717C/view?usp=sharing">
                                    <img src="https://blog.bonus.ly/hubfs/employee-experience-featured-image.png"
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
                            <div className="col-md-5">
                                <a href="https://mbdirect.herokuapp.com/">
                                    <img src="https://img.helpnetsecurity.com/wp-content/uploads/2020/04/28130628/videocall-remotework.jpg"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project-3</p>
                                <p id="repo"><a href="https://github.com/chernanma/MBDirect"
                                >https://github.com/chernanma/MBDirect</a></p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-5">
                                <a href="https://chernanma.github.io/Project_1">
                                    <img src="https://media.nbcboston.com/2020/11/NBC-COVID-Tracker.jpg?resize=1200%2C675ssets/covid19.png"
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
                            <div className="col-md-5">
                                <a href="https://peaceful-beyond-40794.herokuapp.com/">
                                    <img src="https://blog.hubstaff.com/wp-content/uploads/2019/02/Project-budget-management@2x.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Budget Tracker</p>
                                <p id="repo"><a href="https://github.com/AdrianStorr/Pwahomework"
                                >https://github.com/AdrianStorr/Pwahomework</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <a href="https://vast-woodland-01889.herokuapp.com/">
                                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/articles/2015/12/radical-rick-main-1506737871.jpg"
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
                            <a href="https://github.com/AdrianStorr/update-port/blob/master/resumeUpdate.pdf"
                            > Resume</a>

                        </div>
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio