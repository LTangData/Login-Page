import { Link } from "react-router-dom"

const Main = () => {
  return (
    <div>
        <h1>Main</h1>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
        </ul>
    </div>
  )
}

export default Main