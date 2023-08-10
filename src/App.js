import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home/Home"
import Calculator from "./pages/Calculator/Calculator"
import BMI from "./pages/BMI/BMI"
import CalorieCalculator from "./pages/CalorieCalculator/CalorieCalculator"
import BodyFat from "./pages/BodyFat/BodyFat"
import Inflation from "./pages/Inflation/Inflation"
import Salary from "./pages/Salary/Salary"
import Percentage from "./pages/Percentage/Percentage"
import FuelCostCalculator from "./pages/FuelCostCalculator/FuelCostCalculator"
import PasswordGenerator from "./pages/PasswordGenerator/PasswordGenerator"
import InvestmentCalculator from "./pages/InvestmentCalculator/InvestmentCalculator"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={ <SharedLayout/> }>
              <Route index element={ <Home/> }/>
              <Route path="Calculator" element={ <Calculator/> }/>
              <Route path="BMI" element={ <BMI/> }/>
              <Route path="CalorieCalculator" element={ <CalorieCalculator/> } />
              <Route path="BodyFat" element={ <BodyFat/> } />
              <Route path="Inflation" element={ <Inflation/> } />
              <Route path="Salary" element={ <Salary/> } />
              <Route path="Percentage" element={ <Percentage/> } />
              <Route path="FuelCostCalculator" element={ <FuelCostCalculator/> } />
              <Route path="PasswordGenerator" element={ <PasswordGenerator/> } />
              <Route path="InvestmentCalculator" element={ <InvestmentCalculator/> } />
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App