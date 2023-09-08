import "../Style.css"
import { useState } from "react"

const Percentage = () => {
    const [percent, setPercent] = useState("")
    const [whole, setWhole] = useState("")
    const [result, setResult] = useState("")
    const [outcome, setOutcome] = useState("Please set two attributes")

    //function for calculation percentage
    const submitForm = (event) => {
        event.preventDefault()
        let finalResult

        //when attributes percent and whole are present, result value is calculated
        if(percent && whole && result === ""){
            finalResult = (parseFloat(percent) / 100) * parseFloat(whole)
            setOutcome(`${percent}% of ${whole} = ${finalResult}`)            
        }

        //when attributes percent and result are present, whole value is calculated
        if(percent && result && whole === ""){
            finalResult = parseFloat(result) / (parseFloat(percent) / 100)
            setOutcome(`${percent}% of ${finalResult} = ${result}`) 
        }

        //when attributes whole and result are present, precent value is calculated
        if(whole && result && percent === ""){
            finalResult = (parseFloat(result) / parseFloat(whole)) * 100
            setOutcome(`${finalResult}% of ${whole} = ${result}`) 
        }
    }

    //function fore clearing values from input
    const clear = () => {
        setPercent("")
        setWhole("")
        setResult("")
        setOutcome("Please set two attributes")
    }

  return (
    <div className="main">

        <h1 className="text">Percentage Calculator</h1>

        <div className="form-section">
            <h2>{outcome}</h2>

            <form onSubmit={submitForm} className="form">

                <div className="form-input">
                    <input 
                    name="percent" 
                    type="number"
                    value={percent} 
                    onChange={(e)=>{setPercent(e.target.value)}}/>

                    <label htmlFor="percent">% </label>

                    <label htmlFor="whole"> of </label>

                    <input 
                    name="whole" 
                    type="number"
                    value={whole}  
                    onChange={(e)=>{setWhole(e.target.value)}}/>

                    <label htmlFor="result"> = </label>

                    <input 
                    name="result" 
                    type="number" 
                    value={result} 
                    onChange={(e)=>{setResult(e.target.value)}}/>

                </div>

                <input className="submit" type="submit" value="Calculate"/>
                <input className="button" type="button" value="Clear" onClick={clear}/>
            </form>

        </div>
    </div>
  )
}

export default Percentage