import React, { useState, useEffect } from "react";
import { fetchSmurfs, addSmurf, deleteSmurf, modifySmurf } from "../actions";
import { connect } from "react-redux";
// import axios from "axios";

import SmurfCard from "./SmurfCard";

const Smurfs = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, [fetchSmurfs]);

  const [initialSmurfState] = useState({ id: "", name: "", height: "", age: "" })

  const [postSmurf, setPostSmurf] = useState({name: "", age: "", height: ""})

  const [editing, setEditing] = useState(false)


  const editChangeHandle = smurf => {
    setEditing(!editing)
    if(!editing){
        setPostSmurf({ id: smurf.id, name: smurf.name, height: smurf.height, age: smurf.age  })
    } else {
        setPostSmurf(initialSmurfState)
    }
  }

  const changeHandle = e => {
      setPostSmurf({
          ...postSmurf,
          [e.target.name]: e.target.value
      })
  };

  const checkChangeHandler = evt => {
    let checked = evt.target.checked;
    setEditing(checked);
}


  const deleteHandle = id => {
      props.deleteSmurf(id)
      setPostSmurf(initialSmurfState)
  }

let newSmurf = {
    name: postSmurf.name,
    age: postSmurf.age,
    height: postSmurf.height,
    id: Date.now()
};

let editSmurf = {
    name: postSmurf.name,
    age: postSmurf.age,
    height: postSmurf.height,
    id: postSmurf.id
};

  const submitHandle = e => {
    if (editing) {
        e.preventDefault();
        props.modifySmurf(editSmurf)
        setPostSmurf(initialSmurfState)
    } else {
        e.preventDefault();
        props.addSmurf(newSmurf)
        setPostSmurf(initialSmurfState)
    }
  }

 

//   const submitHandle = e => {
//       if(editing){
//         e.preventDefault();
//         let editSmurf = {
//             name: postSmurf.name,
//             age: postSmurf.age,
//             height: postSmurf.height,
//             id: postSmurf.id
//         }
//         axios
//             .put(`http://localhost:3333/smurfs/${editSmurf.id}`, editSmurf)
//                 .then(res => {
//                     console.log(res.data);
//                     fetchSmurfs()
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//       } else {
//         e.preventDefault();
//         let newSmurf = {
//             name: postSmurf.name,
//             age: postSmurf.age,
//             height: postSmurf.height,
//             id: Date.now()
//         };
//         axios
//             .post("http://localhost:3333/smurfs", newSmurf)
//                 .then(fetchSmurfs())
//                 .catch(err => {
//                     console.log(err);
//                 });
//             }
//   };

//   const deleteHandle = id => {
//         setPostSmurf({ id: "", name: "", height: "", age: "" })
//       axios.delete(`http://localhost:3333/smurfs/${id}`)
//         // .then(res => {console.log(res.data)),
//         .then(res => {
//             console.log(res.data);
//             fetchSmurfs()
//         })
//   }

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
        <button>Add/Update</button>

      </form>


      <div>
        {props.smurfs.map(smurf => (
          <SmurfCard 
            key={smurf.id}
            smurf={smurf} 
            deleteHandle={deleteHandle} 
            setEditing={setEditing} 
            checkChangeHandler={checkChangeHandler} 
            editChangeHandle={editChangeHandle}/>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps,{ fetchSmurfs, addSmurf, deleteSmurf, modifySmurf })(Smurfs);