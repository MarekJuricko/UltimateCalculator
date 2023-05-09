import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="menu">
      <Link to="Calculator">Calculator</Link>
      <Link to="BMI">BMI Index</Link>
      <Link to="CalorieCalculator">Calorie Calculator</Link>
      <Link to="BodyFat">Body Fat</Link>
      <Link to="Inflation">Inflation</Link>
      <Link to="Salary">Salary</Link>
      <Link to="Percentage">Percentage</Link>
    </div>
  )
}

export default Home