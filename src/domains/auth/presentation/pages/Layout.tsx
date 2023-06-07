import { Link, Outlet } from 'react-router-dom'
import AuthStatus from './AuthStatus'

 function Layout() {
  return (
    <>
    <AuthStatus />

    {/* <ul>
      <li>
        <Link to="/">Public Page</Link>
      </li>
      <li>
        <Link to="/protected">Protected Page</Link>
      </li>
    </ul> */}

    <Outlet />
  </>
  )
}

export default Layout