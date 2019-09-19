import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "black",
    bold: false,
    italic: false,
    underline: false
  };

  changeColor(change) {
    // alert("Hello!");
    this.setState({ color: change });
  }

  changeStyle(style) {
    // alert("Hello!");
    this.setState({ [style]: !this.state[style] });
  }

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          variant="outline-primary"
          className={this.state[style]}
          style={styles[style]}
          key={style}
          onClick={() => this.changeStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          variant="outline-primary"
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.changeColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.bold ? "bold" : " ",
            fontStyle: this.state.italic ? "italic" : " ",
            textDecorationLine: this.state.underline ? "underline" : " "
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
