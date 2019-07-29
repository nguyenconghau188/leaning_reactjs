import React, {Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: 'red',
      fontSize: 15
    }
    this.setColor = this.setColor.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
  }

  setColor = (param) => {
    this.setState({
      color: param
    });
  }

  setFontSize = (param) => {
    this.setState(
      prevState => {
        if (prevState.fontSize > 8 && prevState.fontSize < 32) {
          return {
            fontSize: param === "inc" ? (prevState.fontSize+1) : (prevState.fontSize-1)
          }
        }
        if (prevState.fontSize > 8 && param === 'dec') {
          return {
            fontSize: prevState.fontSize - 1
          }
        } else if (prevState.fontSize < 32 && param === 'inc') {
          return {
            fontSize: prevState.fontSize + 1
          }
        }
      }
    );
  }

  setDefault = (param) => {
    if (param === 'rs') {
      this.setState({
        color: 'red',
        fontSize: 15
      })
    }
  } 

  render() {
    return (
      <div className="container mt-50">
        <div className="row">      
          <ColorPicker 
            color = {this.state.color} 
            onReceiveColor = {this.setColor}
          />
          <SizeSetting 
            fontSize={this.state.fontSize} 
            onReceiverSize = {this.setFontSize}
            onResetDefault = {this.setDefault.bind(this)}
          />       
          <Result 
            color={this.state.color} 
            fontSize={this.state.fontSize} 
          />      
        </div>
      </div>
    );
  }
}

export default App;
