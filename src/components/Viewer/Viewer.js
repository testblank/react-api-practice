import React from "react";
import "./Viewer.scss";
import {ChasingDots} from 'better-react-spinkit';

const Viewer = ({ src, id, alt, loading }) => {
  if (loading) {
    return(
      <div className="viewer">
        <ChasingDots color="white" size={60}/>
      </div>
    )
  }
  if (!src) {
    return null;
  }
  return (<div className="viewer">
    <img src={src} alt={alt} id={id}/>
  </div>)
};

export default Viewer;
