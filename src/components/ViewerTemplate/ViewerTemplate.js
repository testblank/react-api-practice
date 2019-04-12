import React from "react";
import './ViewerTemplate.scss'

const ViewerTemplate = ({ viewer, spaceNavigator }) => {
  return (
    <div className="viewer-template">
      <header>Sakura Picture of the Day</header>
      <div className="viewer-wrapper">
        {viewer}
        <div className="space-navigator-wrapper">{spaceNavigator}</div>
      </div>
    </div>
  );
};

export default ViewerTemplate;
