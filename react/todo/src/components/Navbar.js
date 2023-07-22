import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
    <>
        <Link to="/to-do">To Do</Link>
        <br />
        <Link to="/tic-tac-toe">TicTacToe</Link>
        <Outlet /> {/* renders the child route */}
        <Link to="/to-do">To Do</Link>
        <br />
        <Link to="/tic-tac-toe">TicTacToe</Link>
    </>
    );
}

export default Navbar;