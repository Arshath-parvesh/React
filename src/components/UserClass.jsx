import React, { useEffect, useState } from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Arshath parvesh",
        location: "Chennai",
      },
    };
    console.log(" class cons");
  }
  async componentDidMount() {
    const response = await fetch(
      "https://api.github.com/users/Arshath-parvesh"
    );
    const result = await response.json();

    this.setState({
      userInfo: result,
    });
  }
  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @arshath_parveh</h4>
      </div>
    );
  }
}

export default UserClass;
