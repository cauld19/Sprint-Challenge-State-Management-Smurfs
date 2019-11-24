import React from 'react';

const Form = ({submitHandle, changeHandle, postSmurf}) => {
    return (
        
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={postSmurf.name}
          onChange={changeHandle}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={postSmurf.age}
          onChange={changeHandle}
        />
        <input
          type="text"
          name="height"
          placeholder="height"
          value={postSmurf.height}
          onChange={changeHandle}
        />
        <button>Add/Update</button>

      </form>
    );
}

export default Form;