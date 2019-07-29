import React, {Component} from 'react';
import Reset from './Reset';

class SizeSetting extends Component {
  
  increateFontSize = () => {
    this.props.onReceiverSize("inc");
  }

  decreateFontSize = () => {
    this.props.onReceiverSize("dec");
  }

  resetDefault = (param) => {
    if (param === 'rs') {
      this.props.onResetDefault(param);
    }
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">        
        <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
            </div>
            <div className="panel-body">               
              <button type="button" className="btn btn-success" onClick={this.increateFontSize}>Tăng</button>
              <button type="button" className="btn btn-success" onClick={this.decreateFontSize}>Giảm</button>
            </div>
        </div>
        <Reset onResetDefault={this.resetDefault}/>   
      </div>
    );
  }
}

export default SizeSetting;