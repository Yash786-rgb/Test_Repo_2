import React from "react";

console.log("a");


class ans_elem extends React.Component {
  constructor() {
    super();
    this.state = {
      ans: "",
    };
  }
  changeAns = (arg) => {
    this.setState({ ans: arg });
  };
  render() {
    return <button class="btn">{this.state.ans}</button>;
  }
}
export default ans_elem;
