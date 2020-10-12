import React from "react";
import "./App.css";
import Tugas9 from "./Tugas9/Tugas9";
import Tugas10 from "./Tugas10/Tugas10";
import Tugas11 from "./Tugas11/tugas11";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderChild: true };
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }

  handleChildUnmount() {
    this.setState({ renderChild: false });
  }
  render() {
    return (
      <div>
        <Tugas9 />
        <Tugas10 />
        {this.state.renderChild ? (
          <Tugas11 unmountMe={this.handleChildUnmount} />
        ) : null}
      </div>
    );
  }
}

export default App;
