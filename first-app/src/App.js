import React from "react";
import "./App.css";
import Tugas9 from "./Tugas9/Tugas9";
import Tugas10 from "./Tugas10/Tugas10";
import Tugas11 from "./Tugas11/Tugas11";
import Tugas12 from "./Tugas12/Tugas12";
import Tugas13 from "./Tugas13/Tugas13";
import Tugas14 from "./Tugas14/Tugas14";
import Tugas15 from './Tugas15/Tugas15';




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
        {/* <Tugas9 />
        <Tugas10 />
        {this.state.renderChild ? (
          <Tugas11 unmountMe={this.handleChildUnmount} />
        ) : null}
        <Tugas12/>
        <Tugas13/>

        <Tugas14 /> */}
        <Tugas15/>
      </div>
    );
  }
}

export default App;
