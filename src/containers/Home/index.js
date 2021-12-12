import React from "react";
import Section1 from "../../component/Section1";
import Section2 from "../../component/Section2";
import Section3 from "../../component/Section3";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const Home = () => {
    return (
      <div>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    )
}

export default Home;