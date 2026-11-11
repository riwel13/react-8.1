import { Component } from "react";
import css from "./Statistics.module.css";

class Statistics extends Component {
  render() {
    const { good, neutral, bad} = this.props.mood;
    const total = good + neutral + bad 
    const percentage = total > 0? (good / total) * 100 : 0
    return (
      <ul className={css.ul}>
        <li key="1">добре: {good}</li>
        <li key="2">таке: {neutral}</li>
        <li key="3">сумно: {bad}</li>
        <li key="4">всього: {total}</li>
        <li key="5">ви були щастливі: {Math.round(percentage)}%</li>
      </ul>
    );
  }
}

export default Statistics;
