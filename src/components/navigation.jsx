import { Outlet, Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">LogIn</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            {/* <Link to="/create"></Link> */}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};