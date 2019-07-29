import React, { Component } from 'react';

class ColorPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: ['red', 'green', 'blue', 'yellow']
    }

  }

  onSelectColor = (color) => {
    this.props.onReceiveColor(color);
  }

  render() {
    let elmColors = this.state.color.map((color, index) => {
      return (
        <span
          style={{background: color}}
          key={index}
          className={
            this.props.color === color ? "active" : ""
          }
          onClick={() => this.onSelectColor(color)}
        ></span>
      );
    });

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">      
        <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Color Picker</h3>
            </div>
            <div className="panel-body">
              { elmColors }
              <hr/>
            </div>
        </div>         
      </div>
    );
  }
}

export default ColorPicker;
