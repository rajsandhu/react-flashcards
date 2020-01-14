import React from "react";
import "./App.css";

class Flashcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      empty: false
    };
  }

  handleClick = () => this.setState({ opened: !this.state.opened });

  render() {
    const isOpened = this.state.opened;
    return (
      <div onClick={this.handleClick} className="flashcard">
        {isOpened ? (
          <div>
            <p>{this.props.answer}</p>
            <img className="main-image" src={this.props.image}></img>
          </div>
        ) : (
          <h1>{this.props.question}</h1>
        )}
      </div>
    );
  }
}

export default Flashcard;
