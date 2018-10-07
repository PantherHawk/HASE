import React, { Component } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import Evaluation from './Evaluation';
// import Animated from 'animated';

const typeFormUri = `https://al309.typeform.com/to/RNfJ1w`;

class PopupForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      submitted: false
    }
    this.openForm = this.openForm.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }
  // handleSubmit() {
  //   console.log('fired handle submit')
  //   this.setState(prevState => { submitted: true }, console.log(this.props.location));
  // }

  openForm() {
    this.typeformEmbed.typeform.open();
  }
  closeForm(e) {
    this.typeformEmbed.typeform.close();
    this.props.handleSubmit();
    // this.setState({submitted: true}, () => console.log(this.state.submitted));
  }


  render() {

      return (
        <div className="ExamplePopup">
          <ReactTypeformEmbed
            onSubmit={this.closeForm}
            popup={true}
            autoOpen={false}
            url={typeFormUri}
            hideHeaders={true}
            hideFooter={true}
            buttonText="Go!"
            style={{height: "auto"}}
            ref={(tf => this.typeformEmbed = tf) }
          />

            <button className="btn btn-success btn-lg cta-main" onClick={this.openForm} style={{cursor: 'pointer'}}>Click to open the popup!</button>
          </div>
        )
    }
  }


export default PopupForm;
