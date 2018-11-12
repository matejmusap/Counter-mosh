import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value //counter is added because of property counter={counter} in counters.jsx
  };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }  ovo je starndardni stari izraz => novi izraz je ispod i njega ćemo koristiti

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //counter is added because of property counter={counter} in counters.jsx
          className="btn btn-danger btn-sm m-2"
        >
          DELETE
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
