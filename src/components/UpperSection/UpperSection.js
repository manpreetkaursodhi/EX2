import React from "react";
import Item from "../Item/Item";
import "./UpperSection.css";

const UpperSection = () => {
  return (
    <div className="upper">
      <Item />
      <img
        className="img1"
        src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="an image"
      />
      <img
        className="img2"
        src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="an image"
      />
    </div>
  );
};

export default UpperSection;
