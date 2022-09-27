// import Images from "./Images";
import React from "react";

export default function Contacts(props) {
  return (
<div className="container">
    <div className="cat">
        <img src={props.img} width= "100px" height="100px" alt="cat" />
    </div>
<h3>{props.name}</h3>
    <div className="info-group">
    <img src="./icons/icons8-phone-30.png" alt="" />
    <p>{props.phone}</p>
    </div>
    <div className="info-group">
        <img src="./icons/icons8-mail-24.png" alt="" />
        <p>{props.email}</p>
    </div>
</div>
  );
}
