import React from "react";

const SmurfCard = props => {

  console.log(props.postSmurf.select)


  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <h4>{props.smurf.age}</h4>
      <h5>{props.smurf.height}</h5>
      <button onClick={() => {props.deleteHandle(props.smurf.id)}}>Remove</button>
      <input
            name="easyLevel"
            type="checkbox"
            checked={null}
            onChange={() => props.editChangeHandle(props.smurf)}
        >
        </input>
    </div>
  );
};

export default SmurfCard;