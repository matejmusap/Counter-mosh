import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onReset, counters } = this.props; //exapmle of destructuring (not this.props.onDelete)
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          RESET
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            //  Upper row replace commneted one
            // value={counter.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
