import "./BMI.css"
import { useState } from "react"

const BMI = () => {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("") 
    const [bmi, setBmi] = useState("BMI INDEX")
    const [category, setCategory] = useState("")
    const [weightRange, setWeightRange] = useState("Please set height and weight attributes to continue")

    //when attributes height or weight are changed, function will be called 
    const submitForm = (event) => {
        event.preventDefault()

        //If only both height and weight attributes are present, code continues
        if(height && weight){
            //finding out bmi based on height and weight attributes
            let bmiResult = ((parseFloat(weight) / ((parseFloat(height) / 100) * (parseFloat(height) / 100)))).toFixed(2);

            //finding out to which category does person belong based on the previous bmiResult
            if(parseFloat(bmiResult) < 18.5){
                setCategory(`(underweight)`)
            }
            if(18.5 <= parseFloat(bmiResult) && parseFloat(bmiResult) <= 24.9){
                setCategory(`(normal)`)
            }
            if(25 <= parseFloat(bmiResult) && parseFloat(bmiResult) <= 29.9){
                setCategory(`(overweight)`)
            }
            if(29.9 < parseFloat(bmiResult)){
                setCategory(`(obese)`)
            }

            //function for getting lowest weight for preson with set height
            let weightRangeMin = (height) => {
                let checkBmi
                let testWeight = 5
                do{
                    checkBmi = ((parseFloat(testWeight) / ((parseFloat(height) / 100) * (parseFloat(height) / 100)))).toFixed(2);
                    testWeight++
                }while(checkBmi <= 18.25 )
                return testWeight
            }
            
            //function for getting highest weight for preson with set height
            let weightRangeMax = (height) => {
                let checkBmi
                let testWeight = 5
                do{
                    checkBmi = ((parseFloat(testWeight) / ((parseFloat(height) / 100) * (parseFloat(height) / 100)))).toFixed(2);
                    testWeight++
                }while(checkBmi <= 24.75 )
                return testWeight
            }
        
            try{
                setBmi(`Your BMI index is ${bmiResult}`)
                setWeightRange(`Normal weight range for your height is approximately from ${weightRangeMin(height)}kg to ${weightRangeMax(height)}kg`)
            }catch (err){
                console.log(err.message);
            }
        }
    }

    
    return (
        <div className="BMI-main">
            <h1 className="BMI-text">{bmi} {category}</h1>
            <h1 className="BMI-text">{weightRange}</h1>
            <form onChange={submitForm} className="BMI-form">
                <div className="BMI-input">
                    <label htmlFor="BMI-height">Height:</label>
                    <input className="BMI-input-range" type="range" min="50" max="220" name="BMI-height" value={height} onChange={(e) => setHeight(e.target.value)}/>
                    <label htmlFor="BMI-height">{height}cm</label>
                </div>
                <div className="BMI-input">
                    <label htmlFor="BMI-weight">Weight:</label>
                    <input className="BMI-input-range" type="range" min="40" max="180" name="BMI-weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                    <label htmlFor="BMI-weight">{weight}kg</label>
                </div>
            </form>
        </div>
    )
}

export default BMI