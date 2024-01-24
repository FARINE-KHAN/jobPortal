import React from "react";
import "./loading.css";
function Loading() {
  return (
    <div className="b">
      <div className="loader">
      <h1>Loading...</h1>
        {/* <span className="loader-text"></span> */}
        <span className="load"></span>
      </div>
    </div>
  );
}

export default Loading;
