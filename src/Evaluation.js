import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Label, Well } from 'react-bootstrap';

class Evaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
  }
  handleAnimationEnd() {
    this.setState({done: true});
  }

  render() {
    return (
      <React.Fragment>
      <Well>
      <Label>
        <h1 className="evaluation">
      <CountUp
        end={9000000}
        duration={5}
        decimal=","
        prefix="$ "
        suffix=" savings!"
        onEnd={() => {
          console.log('Ended!');
          this.handleAnimationEnd();
        }}
        onStart={() => console.log('Started!')}
      />
    </h1>
  </Label>
</Well>
<div className="col-sm-12">
  <div className="row">
    <p style={{textAlign: "center"}}>
      {this.state.done && <button className="btn btn-success btn-lg cta-main">Sign Up Now For Your Appeal!</button>}
    </p>
  </div>
</div>
</React.Fragment>
    )
  }
}

export default Evaluation;
