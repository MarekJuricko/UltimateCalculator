import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home/Home"
import Calculator from "./pages/Calculator/Calculator"
import BMI from "./pages/BMI/BMI"
import CalorieCalculator from "./pages/CalorieCalculator/CalorieCalculator"
import BodyFat from "./pages/BodyFat/BodyFat"

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
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App