import { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const TicTacToe = () => {
    // const navigate = useNavigate();
    // setTimeout(() => {
    //     navigate("/to-do", {state: {view: "admin"}});
    // }, 2000);

    // const location = useLocation();
    // console.log(location);

    // location.hash is used to get the hash part of the url
    // generally used for scrolling to a particular part of the page

    const [currTime, setCurrTime] = useState(0);
    // console.log(currTime);

    const count = useRef(0); // useRef() returns a mutable object which persists between renders
    // it will not cause a re-render when changed and is not a snapshot of state
    console.log(count.current);

    const timerRef = useRef(null); // useRef() can also be used to store references to DOM nodes
    // this had to be done or else when resetTimer button cliked timeout is not distroyed and another timeout is created

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setCurrTime(currTime+1);
            count.current+=5;
        },1000)
    }, [currTime]); // this will create a new interval only when currTime changes
 
    // setInterval(() => {
    //     setCurrTime(currTime+1);
    // }, 1000); // this will create a new interval every time the component is rendered

    return (
        <div>
            <h1>Tic Tac Toe </h1>
            {/* <p>{location.pathname}</p> */}
            <h2>Current time passed = {currTime}</h2>
            <button onClick={() => {setCurrTime(0);
                                    clearTimeout(timerRef.current);
                                    }}>Reset Timer</button>
        </div>
    )
}

export default TicTacToe