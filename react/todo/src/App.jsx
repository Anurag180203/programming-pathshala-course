import React, { useContext, useEffect, useCallback } from "react";
import UserEntry from "./components/UserEntry";
// import axios from "axios";

// import {useLocation} from "react-router-dom";

import {addUser,getAllUsers} from './client.js';
// import {useState} from "react";
// import {useReducer} from "react";
// import { initialUserState, userStateReducer } from "./userStateReducer";
import { UserStateContext, UserStateReducerContext } from "./userContext";

// actions -> action types -> reducer -> store -> view

// prop drilling -- passing props from parent to child to grandchild while the child does not need the prop
// context api -- global state
// redux -- global state

const App = () => {

    // const location = useLocation();
    // console.log(location);

  //const [users, setUsers] = useState([{name:'a',college:'A'},{name:'b',college:'B'},{name:'c',college:'C'}]);

  const users = useContext(UserStateContext);
  const dispatch = useContext(UserStateReducerContext);

  // const [users, dispatch] = useReducer(userStateReducer, initialUserState);
  // const deleteName = (name) => {
  //   // console.log(name);
  //   // users = users.filter((user) => {
  //   //   return user.name !== name;
  //   // });
  //   // setUsers(users);

  //   dispatch({
  //     "type": "delete",
  //     "name": name
  //   })
  // }

  // useEffect(() => {
  //   axios.get("http://localhost:3050/getAllUsers")
  //   .then((response) => {
  //     dispatch({
  //       "type": "create",
  //       "data": response.data
  //     })
  //   })
  // }, [dispatch]);

  useEffect(() => {
    getAllUsers(dispatch);  
  }, [dispatch]);

  // useEffect is called after the first render and after every render
  // it is useful for side effects like making an api call at mounting or unmounting
  // for synchronizing with external systems
  // empty dependency array means useEffect will be called only after the first render

  const onSubmit = (e) => {
    e.preventDefault();
    // const name = e.target.elements.name.value;
    // e.target.elements.name.value = '';
    // const college = e.target.elements.college.value;
    // e.target.elements.college.value = '';
    // setUsers([...users, {name, college}]);

    // dispatch({
    //   "type": "insert",
    //   "name": e.target.elements.name.value,
    //   "college": e.target.elements.college.value
    // })

    addUser(e.target.elements.name.value, e.target.elements.college.value,dispatch)

    // axios.post("http://localhost:3050/addUser",{
    //   "name": e.target.elements.name.value,
    //   "college": e.target.elements.college.value
    // }).then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // });

  }

  useCallback(onSubmit, [dispatch]); // useCallback is used to memoize a function so that it is not recreated on every render
  // like useMemo is used to memoize a value
  // useRef is used to create a reference to a dom element


  const getAddUserForm = () => {
    return (
      <div>
        <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input id="name" type="text" placeholder="Name" />
        <br></br>
        <label>College:</label>
        <input id="college" type="text" placeholder="College" />
        <button>Add User</button>
        </form>
      </div>
    );
  }

  // const editUser = (property, name, newValue) => {
  //   // let editeduser = users.filter((user) => user.name ===name)[0];
  //   // editeduser[property] = newValue;
  //   // setUsers([...users]);

  //   dispatch({
  //     "type": "edit",
  //     "name": name,
  //     "property": property,
  //     "newValue": newValue
  //   });
  // }

  const getUserListHtml = () => {
    return users.map((user) => {
      return <UserEntry 
      key={user.id} 
      id={user.id}
       name={user.name} college={user.college} gradYear={2020} 
      // deleteName={deleteName}
      //editUser={editUser}
      />;
    });
  }

  return (
    <div>
      {getAddUserForm()}
      <ul>
      {getUserListHtml()} 
      </ul>
    </div>
  )
}

export default App;