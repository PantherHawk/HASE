import React, { Component } from 'react';
import CountUp from 'react-countup';

class Evaluation extends Component {

  render() {
    return (
      <CountUp
        end={9000000}
        duration={5}
        decimal=","
        prefix="$ "
        suffix=" savings!"
        onEnd={() => console.log('Ended!')}
        onStart={() => console.log('Started!')}
      />
    )
  }
}

export default Evaluation;
