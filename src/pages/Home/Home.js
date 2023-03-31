import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="menu">
      <Link to="calculator">Calculator</Link>
      <Link to="BMI">BMI Index</Link>
    </div>
  )
}

export default Home