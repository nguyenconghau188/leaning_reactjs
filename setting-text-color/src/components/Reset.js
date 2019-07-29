import React, {Component} from 'react';

class Reset extends Component {

  resetDefault = () => {
    this.props.onResetDefault('rs');
  }

  render() {
    return (
      <button type="button" className="btn btn-primary" onClick={this.resetDefault}>reset</button> 
    );
  }
}

export default Reset;