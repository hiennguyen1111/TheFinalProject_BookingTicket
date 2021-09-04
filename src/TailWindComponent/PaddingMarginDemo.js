import React from "react";

export default function PaddingMarginDemo(props) {
  return (
    <div className="container">
      <button
        className="bg-red-400 px-20"
        style={({ width: "auto" }, { marginTop: "15" })}
      >I just wanna be part of your symphony!</button>

      <br />

      <button
        className="bg-purple-400 mr-5"
        style={({ marginTop: "15" }, {paddingTop:'15'})}
      >Will you hold me tight and not let go?</button>
    </div>
  );
}
