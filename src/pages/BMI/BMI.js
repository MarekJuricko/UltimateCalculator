import "./BMI.css"
import { useState } from "react"


const BMI = () => {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("") 
    const [bmi, setBmi] = useState(null)
    const [category, setCategory] = useState("")

    const submitForm = (event) => {
        event.preventDefault()

        setBmi("")
        setCategory("")

        if(height && weight){
            let bmiResult = ((parseFloat(weight) / ((parseFloat(height) / 100) * (parseFloat(height) / 100)))).toFixed(2);

            if(parseFloat(bmiResult) < 18.5){
                setCategory(`underweight`)
            }
            if(18.5 <= parseFloat(bmiResult) && parseFloat(bmiResult) <= 24.9){
                setCategory(`normal`)
            }
            if(25 <= parseFloat(bmiResult) && parseFloat(bmiResult) <= 29.9){
                setCategory(`overweight`)
            }
            if(29.9 < parseFloat(bmiResult)){
                setCategory(`obese`)
            }
        
            try{
                setHeight("")
                setWeight("")
                setBmi(`Your BMI index is ${bmiResult}`)
            }catch (err){
                console.log(err.message);
            }
        }
    }

    
    return (
        <div>
            <h1>{bmi}</h1>
            <h1>{category}</h1>
            <form onSubmit={submitForm}>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="height in cm"/>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="weight in kg"/>
            <input type="submit" value="Calculate"/>
        </form>
        </div>
    )
}

export default BMI