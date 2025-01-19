import { useState } from "react";

function User(props) {
  const [type] = useState("Function");
  return (
    <div>
      <h2>Name : {props.name}</h2>
      <h3>Location : {props.Location}</h3>
      <h4>Contact : @arshath_parveh</h4>
      <h4>Type : {type}</h4>
    </div>
  );
}

export default User;
