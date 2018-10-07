import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import PopupForm from './PopupForm';
import Lorem from 'react-lorem-component';
const Home = props => {
  console.log('props: ', props)
  return (
    <div className="home">
      <Jumbotron className="landing-section hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h1 className="hero-title">Get your money back with lightning fast real-estate appeals.</h1>
              <p className="cta-buttons">
                <Button className="btn btn-lg">Get HAC</Button>
                <Button className="btn btn-success btn-lg cta-main" style={{marginLeft: "40px"}}>Get Started</Button>
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    <div className="landing-section features">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="why-hca">
              Why HCA?
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <h3>
              Something Something Something
            </h3>
            <p>
              Something Something SomethingSomething Something SomethingSomething Something SomethingSomething Something Something
            </p>
          </div>
          <div className="col-sm-6 col-md-3">
            <h3>Yada Yada Yada</h3>
            <p><Lorem count={3} /></p>
          </div>
          <div className="clearfix visible-sm-block"></div>
          <div className="col-sm-6 col-md-3">
            <h3>Blah Blah Blah</h3>
            <p><Lorem count={3} /></p>
          </div>
          <div className="col-sm-6 col-md-3">
            <h3>What Should be Here?</h3>
            <p><Lorem count={3} /></p>
          </div>
        </div>
      </div>

    </div>
    <div className="landing-section users"></div>
    <div className="landing-section get-started">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 id="get-started">Get Started</h2>
          </div>
        </div>
        <div id="start-parent" className="row">
          <PopupForm id="start" handleSubmit={props.handleSubmit}/>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Home;
