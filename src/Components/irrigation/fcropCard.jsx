import React from "react";
import { useNavigate } from "react-router-dom";

function Note(props) {
  const navigate = useNavigate()
  var clickHandler = () => {
    navigate(props.redirect)
  }

  return (
    <div className="note">
      <h2>{props.title}</h2>
      <img className="fcrop" src={props.imge} alt='crop-img'/>
      <button onClick={clickHandler} className="btn btn-primary my-3"> {props.btnname} </button>
    </div>
  );
}

export default Note;