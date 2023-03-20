import "../aos.css";
import "../bootstrap.min.css";
import "../github-calender-responsive.css";
function Calc() {
  function addToDisplay(value) {
    document.getElementById("display").value += value;
  }
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  function calculate() {
    var expression = document.getElementById("display").value;
    var result = eval(expression);
    document.getElementById("display").value = result;
  }

  return (
    <div className="calculator section container">
      <h4>Simple Calculator</h4>
      <div className="container">
        <input type="text" id="display" readonly />
        <input type="button" value="1" onClick={() => addToDisplay("1")} />
        <input type="button" value="2" onClick={() => addToDisplay("2")} />
        <input type="button" value="3" onClick={() => addToDisplay("3")} />
        <input type="button" value="4" onClick={() => addToDisplay("4")} />
        <input type="button" value="5" onClick={() => addToDisplay("5")} />
        <input type="button" value="6" onClick={() => addToDisplay("6")} />
        <input type="button" value="7" onClick={() => addToDisplay("7")} />
        <input type="button" value="8" onClick={() => addToDisplay("8")} />
        <input type="button" value="9" onClick={() => addToDisplay("9")} />
        <input type="button" value="0" onClick={() => addToDisplay("0")} />
        <input type="button" value="+" onClick={() => addToDisplay("+")} />
        <input type="button" value="-" onClick={() => addToDisplay("-")} />
        <input type="button" value="*" onClick={() => addToDisplay("*")} />
        <input type="button" value="/" onClick={() => addToDisplay("/")} />
        <input type="button" value="C" onClick={clearDisplay} />
        <input type="button" value="=" onClick={calculate} />
      </div>
    </div>
  );
}
export default Calc;
