import React, {Component} from 'react';

class Result extends Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Color : {this.props.color} - Fontsize : {this.props.fontSize}px</p>
        <div id="content"
          style={{
            color: this.props.color,
            fontSize: this.props.fontSize
          }}
        >
          Nội dung setting
        </div>
      </div>    
    );
  }
}

export default Result;