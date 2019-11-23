import React from "react";

const SmurfCard = props => {

  
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <h4>{props.smurf.age}</h4>
      <h5>{props.smurf.height}</h5>
      <button onClick={() => {props.deleteHandle(props.smurf.id)}}>Remove</button>
      <input
            name="easyLevel"
            type="checkbox"
            checked={props.editing}
            // onChange={(e) => {props.checkChangeHandler(e, props.smurf)}}
            onChange={() => props.editChangeHandle(props.smurf)}
        >
        </input>
        {/* <button onClick={() => props.editSmurfButton(props.smurf)}>Edit</button> */}
    </div>
  );
};

export default SmurfCard;