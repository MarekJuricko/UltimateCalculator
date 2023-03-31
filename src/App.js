import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home/Home"
import Calculator from "./pages/Calculator/Calculator"
import BMI from "./pages/BMI/BMI"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={ <SharedLayout/> }>
              <Route index element={ <Home/> }/>
              <Route path="calculator" element={ <Calculator/> }/>
              <Route path="BMI" element={ <BMI/> }/>
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App