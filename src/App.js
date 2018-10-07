import React, {Component} from 'react';
import PopupForm from './PopupForm';
import Top from './Top';
import Home from './Home';
import Evaluation from './Evaluation';
import './App.css';

// const AppContext = React.createContext();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      formSubmit: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    console.log('state: ', this.state.formSubmit);
    this.setState({ formSubmit: true }, () => { console.log(this.state.formSubmit) });
  }
  render() {
    if (this.state.formSubmit) {
      return (
        <React.Fragment>
          <Top />
          <h1>HOORAH!</h1><br/><Evaluation />
        </React.Fragment>
      );
    } else {
      return (
        <div className="App">
          <Top />
          <Home spinach={3} handleSubmit={this.handleSubmit} />
        </div>
      );
    }
  }
}
