import React from "react";
import ReactDom from "react-dom";

//stateless functional component or dump component
//always returns jsx

//rules:
//return single element
//div/section/article or Fragment
//use camelcase for html attribute
//className instead of class
//close every element
//formatting

function Greetings() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>John Doe</h2>;

const Message = () => {
  return <p>This is my message</p>;
};

ReactDom.render(<Greetings />, document.getElementById("root"));
