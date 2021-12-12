import React, { Component } from "react";
import "../../index.css";
import Section1 from "../../component/Section1";
import Section2 from "../../component/Section2";
import Section3 from "../../component/Section3";

class Home extends Component {
  render() {
    return (
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    )
  }
}

export default Home;