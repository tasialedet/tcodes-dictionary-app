import React from "react";
import blank from "./blank.png";
import "./Images.css";

export default function Images() {
  return (
    <div className="images">
      <div className="container">
        <div class="row align-items-start">
          <div className="col-4">
            <img src={blank} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-4">
            <img src={blank} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-4">
            <img src={blank} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-4">
            <img src={blank} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-4">
            <img src={blank} alt="..." className="img-thumbnail"></img>
          </div>
          <div className="col-4">
            <img src={blank} alt="..." className="img-thumbnail"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
