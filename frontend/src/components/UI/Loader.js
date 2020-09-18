import React from "react";
import spinner from "../../images/loading-spinner.gif";

const Loader = () => {
  return (
    <img
      src={spinner}
      alt="Loading spinner"
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

export default Loader;
