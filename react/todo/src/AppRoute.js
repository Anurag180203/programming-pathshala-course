import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TicTacToe from './TicTacToe';
import App from './App';
import { UserProvider } from './userContext';
import Navbar from './components/Navbar';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="/to-do" element={
                        <UserProvider>
                            <App />
                        </UserProvider>
                    } />
                    <Route path="/tic-tac-toe" element={
                        <TicTacToe />
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;

// Client side rendering(CSR) -> React, Angular, Vue
// Server side rendering(SSR) -> Next.js, Nuxt.js
// Typescript -> superset of JS, adds types to JS and compiles to JS

// React Fiber -> React 16 introduced a new algorithm for rendering called Fiber
// It is a reimplementation of the stack used to keep track of the components
// It is used to implement features like Suspense, Time slicing, Error boundaries, etc.
// It is a tree structure that allows React to render components in a non-blocking way
// It is a data structure that allows React to pause and resume work later
// It is a set of algorithms for efficiently rendering user interfaces
// It is a set of data structures for efficiently rendering user interfaces