import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value == null) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;