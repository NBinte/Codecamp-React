import React from "react";
import ReactDom from "react-dom";

//stateless functional component or dump component
//always returns jsx

//rules:
//return single element
//div/section/article or Fragment

function Greetings() {
  return (
    <React.Fragment>
      <div>
        <h1>Hello World</h1>

        <ul>
          <li>
            <a href="#">Hello World</a>
          </li>
        </ul>
      </div>
      <div></div>
    </React.Fragment>
  );
}

ReactDom.render(<Greetings />, document.getElementById("root"));
