import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"Hello React \n Welcome")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);