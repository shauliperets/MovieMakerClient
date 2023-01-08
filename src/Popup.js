import React from "react";

import cancelImage from "./images/cancel-1.png";
import cancelImageHover from "./images/cancel-2.png";

function Popup(props) {
  //let cancelImageSource = cancelImage;
  const [cancelImageSource, setCancelImageSource] = React.useState(cancelImage);

  function onCancelHover() {
    console.log("hover");
    setCancelImageSource(cancelImageHover);
  }

  function onCancelLeave() {
    console.log("leave");
    setCancelImageSource(cancelImage);
  }

  return (
    <div className={props.isOpen ? "popup popup_open" : "popup"}>
      <div className="popup__container">
        <div
          className="popup__header"
          onMouseEnter={onCancelHover}
          onMouseLeave={onCancelLeave}
          onClick={props.onClose}
        >
          <img className="popup__cancel-image" src={cancelImageSource}></img>
        </div>
        <div className="popup__content">{props.children}</div>
      </div>
    </div>
  );
}

export default Popup;
