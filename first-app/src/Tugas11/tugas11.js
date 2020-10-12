import React from "react";

// menambahkan tugas11.js 
// merubah app.js dan app.css

class Tugas11 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:new Date().toLocaleTimeString(),
            timer:101};
    }

    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.setState({
                date:new Date().toLocaleTimeString(),
                timer: this.state.timer-1
            }),1000
        )
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.timer === 1){  //if previous state === 1 , or current now = 0  
        this.props.unmountMe();
        }
    }
    componentWillUnmount(){
        // alert("component cabut test ?");
        clearInterval(this.timerID);
    }
  render() {
    return (
      <div className="timer">
        <p>sekarang jam : {this.state.date}</p>
        <p>hitung mundur :  {this.state.timer}</p>
      </div>
    );
  }
}

export default Tugas11;
