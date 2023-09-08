import "../Style.css"
import { useState } from "react"

const Inflation = () => {
    const [cash, setCash] = useState("")
    const [percent, setPercent] = useState("")
    const [years, setYears] = useState("")
    const [forwardResult, setForwardResult] = useState(`Calculates an inflation based on a certain average inflation rate after some years.`)
    const [backwardResult, setBackwardResult] = useState(`Calculates the equivalent purchasing power of an amount some years ago based on a certain average inflation rate.`)

    //function for calculating forward inflation
    const submitFormForward = (event) => {
        event.preventDefault()
        let result = parseFloat(cash)
        let count = 0

        //only if all attributes are present, code continues
        if(cash && percent && years){
            //code repeats while count does not match years attribute
            do{
                result = (parseFloat(result) + (parseFloat(result) * parseFloat(percent) / 100)).toFixed(2)    
                count++
            }while(count !== parseFloat(years))
    
            setForwardResult(`${cash}€ now equals ${result}€ after ${years} years in purchasing power with an average inflation rate of ${percent}%`)
        }
    }

    //function for calculating backward inflation
    const submitFormBackward = (event) => {
        event.preventDefault()
        let result = parseFloat(cash)
        let count = 0

        //only if all attributes are present, code continues
        if(cash && percent && years){
            //code repeats while count does not match years attribute
            do{
                result = (parseFloat(result) - (parseFloat(result) * parseFloat(percent) / 100)).toFixed(2)    
                count++
            }while(count !== parseFloat(years))
    
            setBackwardResult(`${cash}€ now equals ${result}€ of purchasing power ${years} years ago with an average inflation rate of ${percent}%`)
        }    
    }


  return (
    <div className="main">

        <h1 className="text">Inflation Calculator</h1>

        <div className="form-section">
            <h2>Forward rate Inflation calculator</h2>
            <h3>{forwardResult}</h3>

            <form onSubmit={submitFormForward} className="form">

                <div className="form-input">
                    <input 
                    name="forwardRate" 
                    type="number" 
                    placeholder="cash amount" 
                    onChange={(e)=>{setCash(e.target.value)}}/>

                    <label htmlFor="forwardRate"> with inflation rate </label>

                    <input 
                    name="forwardRate" 
                    type="number" 
                    placeholder="%" 
                    onChange={(e)=>{setPercent(e.target.value)}}/>

                    <label htmlFor="forwardRate"> after </label>

                    <input 
                    name="forwardRate" 
                    type="number" 
                    placeholder="years" 
                    onChange={(e)=>{setYears(e.target.value)}}/>

                    <label htmlFor="forwardRate"> = ? </label>
                </div>

                <input className="submit" type="submit" value="Calculate"/>
            </form>

        </div>

        <div className="form-section">
            <h2>Backward Flat Rate Inflation Calculator</h2>
            <h3>{backwardResult}</h3>

            <form onSubmit={submitFormBackward} className="form">

                <div className="form-input">
                    <input 
                    name="backwardRate" 
                    type="number" 
                    placeholder="cash amount" 
                    onChange={(e)=>{setCash(e.target.value)}}/>

                    <label htmlFor="backwardRate"> with inflation rate </label>

                    <input 
                    name="backwardRate" 
                    type="number" 
                    placeholder="%" 
                    onChange={(e)=>{setPercent(e.target.value)}}/>

                    <input 
                    name="backwardRate" 
                    type="number" 
                    placeholder="years" 
                    onChange={(e)=>{setYears(e.target.value)}}/>

                    <label htmlFor="backwardRate"> ago = ? </label>
                </div>

                <input className="submit" type="submit" value="Calculate"/>
            </form>

        </div>


    </div>
  )
}

export default Inflation