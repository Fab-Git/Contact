import React from "react";

class CheckState extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.state.count++);
  }
  render() {
    return (
      <div>
        {/* <button onClick={() => console.log(this.state.count)}>Continue</button> */}
        <button onClick={this.handleClick}>Continue</button>
      </div>
    );
  }
}
export default CheckState;
