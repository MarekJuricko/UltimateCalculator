import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h3>Ultimate Calculator</h3>
      <Link to="/">Go back home</Link>
    </header>
  )
}

export default Header