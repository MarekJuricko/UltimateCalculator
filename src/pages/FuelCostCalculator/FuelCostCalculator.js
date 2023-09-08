import "../Style.css"
import { useState } from "react"

const FuelCostCalculator = () => {
    const [distance, setDistance] = useState("")
    const [fuelEfficiency, setFuelEfficiency] = useState("")
    const [fuelPrice, setFuelPrice] = useState("")
    const [outcome, setOutcome] = useState("Please set all attributes")

    //function is called when form is submitted
    const submitForm = (event) => {
        event.preventDefault()

        //function continues if all of the attributes are filled
        if(distance && fuelEfficiency && fuelPrice){
            let fuelNeeded,finalCost

            //computing of fuelNeeded and finalCost variables
            fuelNeeded = ((parseFloat(distance) * parseFloat(fuelEfficiency)) / 100).toFixed(2)
            finalCost = (fuelNeeded * parseFloat(fuelPrice)).toFixed(2)

            setOutcome(`This trip will require ${parseFloat(fuelNeeded)} liters of fuel, which amounts to a fuel cost of ${parseFloat(finalCost)}€`)
        }
    }

  return (
    <div className="main">

        <div className="text">
            <h1>Fuel Cost Calculator</h1>
            <h3>{outcome}</h3>
        </div>
    
        <form className="form" onSubmit={submitForm}>
            <div className="input">
                <label htmlFor="distance">Trip distance</label>
                <input name="distance" type="number" onChange={(e)=>{setDistance(e.target.value)}}/>
                <label htmlFor="distance">kilometers</label>
            </div>
            <div className="input">
                <label htmlFor="efficiency">Fuel Efficiency</label>
                <input name="efficiency" type="number" step="0.5" onChange={(e)=>{setFuelEfficiency(e.target.value)}}/>
                <label htmlFor="efficiency">L/100km</label>
            </div>
            <div className="input">
                <label htmlFor="price">Fuel Price</label>
                <input name="price" type="number" step="0.01" onChange={(e)=>{setFuelPrice(e.target.value)}}/>
                <label htmlFor="price">per liter</label>
            </div>
                        
            <input className="submit" type="submit" value="Calculate"/>
        </form>

    </div>
  )
}

export default FuelCostCalculator