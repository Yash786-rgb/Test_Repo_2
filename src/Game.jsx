import React from "react";
import Ans_elem from "./ans_elem.jsx";
class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "initial",
    };
    this.ansElement = React.createRef();
    this.oneDiv1 = React.createRef();
    this.oneDiv2 = React.createRef();
    this.oneDiv3 = React.createRef();
    this.oneDiv4 = React.createRef();
    this.oneDiv5 = React.createRef();
    this.oneDiv6 = React.createRef();
    this.header = React.createRef();
  }

  handleDivClick = (event) => {
    if (easyOrHard == "hard") {
      if (event.target.style.backgroundColor == correctColHard) {
        this.ansElement.current.changeAns("CORRECT");
        this.oneDiv1.current.style.backgroundColor = correctColHard;
        this.oneDiv2.current.style.backgroundColor = correctColHard;
        this.oneDiv3.current.style.backgroundColor = correctColHard;
        this.oneDiv4.current.style.backgroundColor = correctColHard;
        this.oneDiv5.current.style.backgroundColor = correctColHard;
        this.oneDiv6.current.style.backgroundColor = correctColHard;
        this.header.current.style.backgroundColor = correctColHard;
      } else {
        this.ansElement.current.changeAns("TRY AGAIN");
        event.target.style.backgroundColor = "#141e30";
      }
    } else {
      if (event.target.style.backgroundColor == correctColEasy) {
        this.ansElement.current.changeAns("correct");
        this.oneDiv1.current.style.backgroundColor = correctColEasy;
        this.oneDiv2.current.style.backgroundColor = correctColEasy;
        this.oneDiv3.current.style.backgroundColor = correctColEasy;
        this.header.current.style.backgroundColor = correctColEasy;
      } else {
        this.ansElement.current.changeAns("try again");
        event.target.style.backgroundColor = "#141e30";
      }
    }
  };

  resetFn = () => {
    this.header.current.style.backgroundColor = "#ee9ca7";
    this.ansElement.current.changeAns("");

    this.forceUpdate();
  };
  easyClick = () => {
    //   this.forceUpdate();
    // console.log("easy clicked");
    easyOrHard = "easy";
    this.forceUpdate();
  };
  hardClick = () => {
    // console.log("hard clicked");
    easyOrHard = "hard";
    this.forceUpdate();
  };

  render() {
    var colorToFill = [];
    var colorString = [];
    var randomColor = [];
    let f = Math.floor;
    let d = Math.random;
    var r = [
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
    ];
    var g = [
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
    ];
    var b = [
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
      f(d() * 256),
    ];
    for (var i = 0; i < 6; i++) {
      colorString.push(r[i] + ", " + g[i] + ", " + b[i]);
    }
    // console.log(colorString);
    for (var i = 0; i < 6; i++) {
      randomColor.push("rgb(" + colorString[i] + ")");
    }

    //  console.log(randomColor);
    var indexOfColorHard = f(d() * 6);
    var indexOfColorEasy = f(d() * 3);
    var correctColorHard = randomColor[indexOfColorHard];
    var correctColorEasy = randomColor[indexOfColorEasy];
    correctColEasy = correctColorEasy;
    correctColHard = correctColorHard;
    // console.log(correctColor);

    for (var i = 0; i < 6; i++) {
      colorToFill.push({ backgroundColor: randomColor[i] });
    }
    if (easyOrHard == "easy") {
      var easyStyle = {
        backgroundColor: " #ee9ca7",
      };
    } else {
      var hardStyle = {
        backgroundColor: " #ee9ca7",
      };
    }

    if (easyOrHard == "hard") {
      return (
        <div>
          <div style={{ backgroundColor: "#ee9ca7" }} ref={this.header}>
            <h1 className="text-center">THE GREAT</h1>
            <h1 className="text-center color">
              {correctColorHard.toLocaleUpperCase()}
            </h1>
            <h1 className="text-center">COLOR GAME</h1>

            <div style={{ backgroundColor: "white" }} class="row">
              <div class="col-4">
                <Ans_elem ref={this.ansElement} />
              </div>
              <div class="col-4">
                <button class="btn" onClick={this.resetFn}>
                  RESET
                </button>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-2">
                    <button
                      type="button"
                      class="btn "
                      onClick={this.easyClick}
                      style={easyStyle}
                    >
                      EASY
                    </button>
                  </div>
                  <div class="col-2">
                    <button
                      class="btn "
                      onClick={this.hardClick}
                      style={hardStyle}
                    >
                      HARD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="container">
            <div class="row">
              <div className="col-sm-4 ">
                <div
                  ref={this.oneDiv1}
                  onClick={this.handleDivClick}
                  style={colorToFill[0]}
                  className="img-thumbnail"
                ></div>
              </div>
              <div className="col-sm-4 ">
                <div
                  ref={this.oneDiv2}
                  onClick={this.handleDivClick}
                  style={colorToFill[1]}
                  className="img-thumbnail"
                ></div>
              </div>
              <div className="col-sm-4 ">
                <div
                  ref={this.oneDiv3}
                  onClick={this.handleDivClick}
                  style={colorToFill[2]}
                  className="img-thumbnail"
                ></div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-4 ">
                <div
                  ref={this.oneDiv4}
                  onClick={this.handleDivClick}
                  style={colorToFill[3]}
                  className="img-thumbnail"
                ></div>
              </div>
              <div className="col-sm-4 ">
                <div
                  ref={this.oneDiv5}
                  onClick={this.handleDivClick}
                  style={colorToFill[4]}
                  className="img-thumbnail"
                ></div>
              </div>
              <div className="col-sm-4 ">
                <div
                  ref={this.oneDiv6}
                  onClick={this.handleDivClick}
                  style={colorToFill[5]}
                  className="img-thumbnail"
                ></div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <div style={{ backgroundColor: "#ee9ca7" }} ref={this.header}>
            <h1 className="text-center">THE GREAT</h1>
            <h1 className="text-center color">
              {correctColorHard.toLocaleUpperCase()}
            </h1>
            <h1 className="text-center">COLOR GAME</h1>

            <div style={{ backgroundColor: "white" }} class="row">
              <div class="col-lg-4">
                <Ans_elem ref={this.ansElement} />
              </div>
              <div class="col-lg-4">
                <button class="btn" onClick={this.resetFn}>
                  RESET
                </button>
              </div>
              <div class="col-lg-4">
                <div class="row">
                  <div class="col-lg-2">
                    <button
                      type="button"
                      class="btn "
                      onClick={this.easyClick}
                      style={easyStyle}
                    >
                      EASY
                    </button>
                  </div>
                  <div class="col-lg-2">
                    <button
                      class="btn "
                      onClick={this.hardClick}
                      style={hardStyle}
                    >
                      HARD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="container">
            <div class="row">
              <div className="col-sm-4 ">
                <div
                  ref={this.oneDiv1}
                  onClick={this.handleDivClick}
                  style={colorToFill[0]}
                  className="img-thumbnail"
                ></div>
              </div>
              <div className="col-sm-4 ">
                <div
                  ref={this.oneDiv2}
                  onClick={this.handleDivClick}
                  style={colorToFill[1]}
                  className="img-thumbnail"
                ></div>
              </div>
              <div className="col-sm-4 ">
                <div
                  ref={this.oneDiv3}
                  onClick={this.handleDivClick}
                  style={colorToFill[2]}
                  className="img-thumbnail"
                ></div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      );
    }
  }
}
var easyOrHard = "hard";
var correctColEasy;
var correctColHard;
export default Game;
