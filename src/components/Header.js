import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h3>
        <Link to="/">Ultimate Calculator</Link>
      </h3>
    </header>
  )
}

export default Header