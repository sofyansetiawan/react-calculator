import * as React from "https://cdn.skypack.dev/react@17.0.1";
// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '0',
      decimal: false,
      numeric: true,
      symbol: false };

    this.clearDisplay = this.clearDisplay.bind(this);
    this.addNumber = this.addNumber.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  clearDisplay() {
    this.setState({
      number: '0',
      decimal: false,
      numeric: true,
      symbol: false });

  }

  addNumber(elm) {
    const value = elm.target.outerText;

    if (value >= 0 && value <= 9) {
      if (this.state.number == 0 && this.state.number != '0.') {
        this.setState({
          number: value,
          numeric: true,
          symbol: false });

      } else {
        this.setState(state => ({
          number: state.number + value,
          numeric: true,
          symbol: false }));

      }
    } else
    {
      if (value === '.') {
        if (!this.state.decimal && this.state.numeric) {
          this.setState({
            decimal: true,
            symbol: true });

          this.setState(state => ({
            number: state.number + value }));

        }
      } else
      {
        this.setState(state => ({
          number: state.number + value,
          decimal: false,
          numeric: false,
          symbol: true }));

      }
    }
  }

  calculate() {
    if (this.state.numeric == true) {
      let resultTemp = this.state.number.split('');
      let results = [];
      let status = false;
      for (let i = resultTemp.length - 1; i >= 0; i--) {
        if (!status) {
          if (resultTemp[i] === '+' || resultTemp[i] === '*' || resultTemp[i] === '/') {
            status = true;
            results.push(resultTemp[i]);
          } else
          if (resultTemp[i] === '-') {
            results.push(resultTemp[i]);
          } else
          {
            results.push(resultTemp[i]);
          }
        } else
        {
          if (resultTemp[i] !== '+' && resultTemp[i] !== '*' && resultTemp[i] !== '/' && resultTemp[i] !== '-') {
            results.push(resultTemp[i]);
            status = false;
          }
        }
      }
      let resultFinal = results.reverse().join("");
      const result = eval(resultFinal);
      this.setState({
        number: result,
        decimal: false,
        numeric: true });

    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("div", { id: "calculator" }, /*#__PURE__*/
      React.createElement("div", { id: "header" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.number)), /*#__PURE__*/

      React.createElement("div", { class: "body" }, /*#__PURE__*/
      React.createElement("button", { id: "zero", onClick: this.addNumber }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "one", onClick: this.addNumber }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", onClick: this.addNumber }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", onClick: this.addNumber }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "four", onClick: this.addNumber }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", onClick: this.addNumber }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", onClick: this.addNumber }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "seven", onClick: this.addNumber }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", onClick: this.addNumber }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nine", onClick: this.addNumber }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", onClick: this.addNumber }, "."), /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.clearDisplay }, "AC"), /*#__PURE__*/
      React.createElement("button", { id: "equals", onClick: this.calculate }, "="), /*#__PURE__*/
      React.createElement("button", { id: "add", onClick: this.addNumber }, "+"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", onClick: this.addNumber }, "-"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", onClick: this.addNumber }, "*"), /*#__PURE__*/
      React.createElement("button", { id: "divide", onClick: this.addNumber }, "/")))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("root"));