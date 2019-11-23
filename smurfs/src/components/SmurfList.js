import React, { useState, useEffect } from "react";
import { fetchSmurfs } from "../actions";
import { connect } from "react-redux";
import axios from "axios";

import SmurfCard from "./SmurfCard";

const Smurfs = ({ fetchSmurfs, ...props }) => {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  const [postSmurf, setPostSmurf] = useState({name: "", age: "", height: ""})

  const [editing, setEditing] = useState(false)

//   const [editSmurf, setEditSmurf] = useState({name: "", age: "", height: ""})



  const changeHandle = e => {
      setPostSmurf({
          ...postSmurf,
          [e.target.name]: e.target.value
      })
  };

  const deleteHandle = id => {
      axios.delete(`http://localhost:3333/smurfs/${id}`)
        // .then(res => {console.log(res.data)),
        .then(res => {
            console.log(res.data);
            fetchSmurfs()
        })
  }

  const editHandle = smurf => {
      if(editing){
        setPostSmurf({name: smurf.name, age: smurf.age, height: smurf.height, id: smurf.id})
      }
        const editSmurf = {
            name: postSmurf.name,
            age: postSmurf.age,
            height: postSmurf.height,
            id: postSmurf.id
        }
        axios.put(`http://localhost:3333/smurfs/${editSmurf.id}`, smurf)
        .then(res => console.log(res.data));
  }

  const checkChangeHandler = evt => {
    let checked = evt.target.checked;
    setEditing(checked)
}

  const submitHandle = e => {
    e.preventDefault();
    let newSmurf = {
      name: postSmurf.name,
      age: postSmurf.age,
      height: postSmurf.height,
      id: Date.now()
    };
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
        .then(fetchSmurfs())
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
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
        <button>Add</button>

      </form>


      <div>
        {props.smurfs.map(smurf => (
          <SmurfCard key={smurf.id} smurf={smurf} deleteHandle={deleteHandle} setEditing={setEditing} checkChangeHandler={checkChangeHandler} editHandle={editHandle}/>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs.map(smurf => {
      return {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        id: smurf.id
      };
    })
  };
};

export default connect(mapStateToProps,{ fetchSmurfs })(Smurfs);