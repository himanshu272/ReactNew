import React from "react";

function Loading(props) {
  if (props.show == true)
    return (
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      </div>
    );
  else return <div />;
}

export default Loading;
