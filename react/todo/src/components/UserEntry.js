import React from "react";
import { useState, useContext } from "react";
import { UserStateReducerContext } from "../userContext.js";

// Pure functions -> no state of their own, no side effects, same input -> same output
// React.memo() -> memoizes the component, only re-renders if props change
// currently not working as delete function is passed from parent

const UserEntry = (props) => {

    const spanStyle = {
        backgroundColor: "red", 
    }
    // Snapshots of state -> useState()
    // state of editing doesn't change even if component re-renders
    const [editing, setEditing] = useState(false);
    // const [count, setCount] = useState(0);

    const dispatch = useContext(UserStateReducerContext);
    // console.log(dispatch)

    const onChange = (e, property) => {
        dispatch({
            "type": "edit",
            "name": props.name,
            "property": property,
            "newValue": e.target.value
        })
    }
    // console.log(count);
    const changedEditState = () => {
        // concept of batching -> React batches state updates
        
        setEditing(!editing);
        // // setCount(count+1);
        // // setCount(count+1);
        // // setCount(count+1); // this all will still add 1 to count
        // setCount(count => count+1); 
        // setCount(count => count+1); 
        // setCount(count => count+1); // this will add 3 to count. Also known as updater function
        // console.log(editing); // logs previous state of editing
        // // it will change in the next render which will happen after this function call is completed 
        // // till then React will just keep track of changes in state
    }
    return (
        <li 
        // key={props.name}
        >
            {editing ? <input type="text" value={props.name} 
            // onChange={(e) => props.editUser("name",props.name,e.target.value)
            onChange={(e) => {
                onChange(e, "name")
            }}></input>
            :<span style={spanStyle} className='name'>{props.name}</span>}
            &nbsp; &nbsp; &nbsp; &nbsp;

            {editing ? <input type="text" value={props.college} 
            //onChange={(e) => props.editUser("college",props.name,e.target.value)}
            onChange={(e) => onChange(e, "college")}
            ></input>
            :<span>{props.college}</span>}
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>{props.gradYear}</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={changedEditState}>{editing ? "Save Entry":"Edit Entry"}</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button 
            //</li>onClick={() => props.deleteName(props.name)}
            onClick={() => dispatch(
                {
                    "type": "delete",
                    "name": props.name
                }
            )}>Delete entry</button>
        </li>
        );
}

export default React.memo(UserEntry);