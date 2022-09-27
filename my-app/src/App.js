import "./App.css";
import React from "react";
import Contact from "./components/Card";
// import Images from "./images";


function App() {
  return (
    <>
      <Contact
        img="./images/cat.png"
        name="Mr. whiskerson"
        phone=" 212 555 1234"
        email="mr.whiskaz@catnip.com"
      />
      <Contact
        img="./images/cat_PNG50530.png"
        name="Mr. fhiskerson"
        phone=" 222 555 1234"
        email="mr.fhiskaz@catnip.com"
      />
      <Contact 
      img = "./images/cat_PNG50533.png"
      name = "Mr. lhiskerson"
      phone = " 211 555 1234"
      email = "mr.lhiskaz@catnip.com"/>
    </>
  );
}

export default App;
