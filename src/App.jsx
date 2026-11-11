import "./App.css";
import { Component } from "react";
import Feedbacks from "./Components/Feedbacks/Feedbacks";
import Statistics from "./Components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleMood = (mood) => {


    this.setState(prev => ({
      [mood]: prev[mood] + 1,
    }) )

    console.log(this.state);
    


  }

  render() {
    return (
      <>
        <Feedbacks mood={this.state} onMood={this.handleMood}/>
        <Statistics mood={this.state}/>
      </>
    );
  }
}

export default App;
