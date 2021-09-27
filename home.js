import React from "react";
import ReactDOM from "react-dom";
import{
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from "react-router-dom";
import './index.js';
import './App.css';
import './App.js';
import '/index.css';

class Home extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <body>
                <div class="heading">
                    <div class="jumbotron text-center" id="heading">
                        <h1 class="myname">Prathap S</h1>
                        <p class="myoccupation">Adventure Rider</p>
                        <ul class ="nav nav-pills nav-justified" id="navigation">
                            <li class="nav-item">
                                <a class="nav-link active" href="/">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/images">
                                    images
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="rounded-circle">
                                    <img 
                                    src="https://1.bp.blogspot.com/-Y1_FzSajD2U/YRncliaT_tI/AAAAAAAAGlI/GiApkjdbbRIJQxKxMUjgxv7opcS1-CfEwCLcBGAsYHQ/s2048/IMG_20190921_233931_749.jpg"
                                     class="rounded-circle mx-auto d-block"
                                     alt="my photo"
                                     width="130px"
                                     height="150px"
                                     />
                                </div>
                                <br/>
                            </div>
                            <div class="col-sm-8">
                                <h2 class="myskills">Riding objective</h2>
                                <br/>
                                <p class="skills">

                                Biking is not just a passion, it is a lifestyle. No other joy on the planet can compare the joy of hitting the long winding highways on the bike. Such happiness can’t be put in words, however, we’ve tried to capture its essence in these quotes so here are the some of the best biker quotes and sayings that any biker or motorcyclist can live by.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="myskills">Riding skill</h2>
                                <br/>
                                <ul class="skills">
                                    <li>Braking</li>
                                    <li>Turning</li>
                                    <li>swerving</li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <h2 class="myskills">Get in to adventure Riding</h2>
                                <br/>
                                <ul class="skills">
                                <li>
                                Buy a Bike. First, you need an Adventure bike. ...
                                </li>
                                <li>
                                Learn to Ride. Obviously if you don't ride you need to learn to ride first. ...
                                </li>
                                <li>
                                Buy Gear. As with all motorcycle riding you need riding gear. ...
                                </li>
                                <li>
                                Find a Friend. Adventure riding takes you to remote places often without cell phone coverage. ... 
                                </li>
                                <li>
                                Plan Ahead.
                                </li>
                                </ul>
                            </div>
                            <br/>
                            <div class="col-sm-12">
                            <h2 class="myskills">Adventure Touring Motorcycles</h2>
                            <br/>
                            <table class="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th>Bikes</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>Yamaha XT1200Z Super Tene,KTM 1290 Super Adventure ,Triumph Tiger 800 XCx.</td>
                                    <td>8lakh,15 lakh,16 lakh</td>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                    <div class="jumbotron text-center" id="footer">
                        <ul calss="bottom-social">
                            <h6>Follw us</h6>
                            <li class="nav-item">
                                <a href="https://www.instagram.com/accounts/login/"
                                class="fa fa-instagram nav.link"
                                style={{color:"blue"}}
                                />
                                </li>
                             <li class="nav-item">
                                <a href="https://www.facebook.com/"
                                class="fa fa-facebook nav.link"
                                style={{color:"skyblue" }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </body>
        );
    }
}

export default Home;
