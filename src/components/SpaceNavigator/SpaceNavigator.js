import React from "react";
import "./SpaceNavigator.scss";

const SpaceNavigator = ({ onPrev, onNext }) => {
  return (
    <div className="space-navigator">
      <div className="left end">
        <div className="circle" onClick={onPrev}>
          {/* {id} */}
        </div>
      </div>
      <div className="right end">
        <div className="circle" onClick={onNext}>
          {/* {id+1} */}
        </div>
      </div>
    </div>
  );
};

export default SpaceNavigator;
