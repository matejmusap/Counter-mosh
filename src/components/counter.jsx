import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value //counter is added because of property counter={counter} in counters.jsx
  // };
  //Removed becasue we need to remove local state
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }  //This is standard expression => new way of writting is beneath

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // }; //has no sense without local state
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
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
    classes += this.props.counter.value === 0 ? "warning" : "primary"; //remove this.state.value beacues removing local state
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; //remove this.state.value beacues removing local state
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
