import React from 'react';
import ReactDom from 'react-dom';

function Boop(){

  return <h2> Boop Beep Boop Beep </h2>;

}

ReactDom.render(<Boop/>, document.getElementById("root"));

