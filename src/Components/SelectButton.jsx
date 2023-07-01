import React from "react";

const SelectButton = (props) => {

  return (
    <span onClick={props.onClick} className="selectbutton" style={{backgroundColor: props.selected ? "gold" : "", color: props.selected ? "black" : "", fontWeight: props.selected ? 700 : 500, }}>
      {props.children}
    </span>
  );
};

export default SelectButton;