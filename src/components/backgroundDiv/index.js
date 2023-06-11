import React from "react";

const BackgroundDiv = ({ src, children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "77.8vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    borderBottom: "3px solid var(--bg-color)",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "5px",
    padding: "7px",
    height: "fit-content",
    width: "180px",
    fontSize: "24px",
    backgroundColor: "rgba(245, 245, 245, 0.8)",
    color: `var(--bg-color)`,
  };

  return (
    <div style={backgroundStyle}>
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

export default BackgroundDiv;
