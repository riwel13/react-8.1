import { Component } from 'react'
import css from "./Feedbacks.module.css";

class Feedbacks extends Component {

 handleMood = (e) => {
    const mood = e.target.dataset.mood

    console.log(mood);

    this.props.onMood(mood)
    

 }

  render() {

    return(
      <div className={css.div}>
        <h2 className={css.h2}>Ваш настрій?</h2>
        <div className={css.list}>
            <button type='button' data-mood="good" onClick={this.handleMood}>добрий</button>
            <button type='button' data-mood="neutral" onClick={this.handleMood}>таке</button>
            <button type='button' data-mood="bad" onClick={this.handleMood}>сумно</button>
        </div>
      </div>
    )
  }
}

export default Feedbacks
