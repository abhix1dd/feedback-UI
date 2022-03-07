import React from "react";

function Header({ text, bgColor, textColor }) {
  const headerstyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerstyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback-UI",
  bgColor: "rgba(0,0,0,0.1)",
  textColor: "#ff6a44",
};

export default Header;
