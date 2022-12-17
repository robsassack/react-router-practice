import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BookRoutes } from "./BookRoutes";
import "./App.css";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to='/'
              state="Hi"
            >
              {({isActive}) => {
                return isActive ? "Active Home" : "Home"
              }}
            </NavLink>
          </li>
          <li>
            <NavLink to='/books'>Books</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/*' element={<BookRoutes />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
