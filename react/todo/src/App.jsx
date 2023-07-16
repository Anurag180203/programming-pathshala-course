import React, { useContext } from "react";
import UserEntry from "./components/UserEntry";
// import {useState} from "react";
// import {useReducer} from "react";
// import { initialUserState, userStateReducer } from "./userStateReducer";
import { UserStateContext, UserStateReducerContext } from "./userContext";

// actions -> action types -> reducer -> store -> view

// prop drilling -- passing props from parent to child to grandchild while the child does not need the prop
// context api -- global state
// redux -- global state

const App = () => {
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

  const onSubmit = (e) => {
    e.preventDefault();
    // const name = e.target.elements.name.value;
    // e.target.elements.name.value = '';
    // const college = e.target.elements.college.value;
    // e.target.elements.college.value = '';
    // setUsers([...users, {name, college}]);

    dispatch({
      "type": "insert",
      "name": e.target.elements.name.value,
      "college": e.target.elements.college.value
    })
  }

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
      return <UserEntry key={user.name} name={user.name} college={user.college} gradYear={2020} 
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