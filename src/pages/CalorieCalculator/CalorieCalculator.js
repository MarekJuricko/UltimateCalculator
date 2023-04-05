import "./CalorieCalculator.css"
import { useState } from "react"

const CalorieCalculator = () => {
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [activity, setActivity] = useState("1")
    const [resultCalories, setResultCalories] = useState("Calorie Calculator")

    //function is called, when form is submitted
    const submitForm = (event) => {
        event.preventDefault()
        
        //only when all attributes are filled, function continues
        if(age && gender && height && weight && activity){
            //BMR - basal metabolic rate / AMR - active metabolic rate
            let BMR
            let AMR

            //BMR calculation
            if(gender === "male"){
                //Harris-Benedict formula for BMR (men)
                BMR = (66.47 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.755 * parseFloat(age))).toFixed(0)
            }
            else if(gender === "female"){
                //Harris-Benedict formula for BMR (women)
                BMR = (655.1 + (9.563 * parseFloat(weight)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age))).toFixed(0)
            }  
            
            //AMR calculation
            if(activity === "1"){
                AMR = (BMR * 1.2).toFixed(0)
            }
            else if(activity === "2"){
                AMR = (BMR * 1.375).toFixed(0)
            }
            else if(activity === "3"){
                AMR = (BMR * 1.55).toFixed(0)
            }
            else if(activity === "4"){
                AMR = (BMR * 1.725).toFixed(0)
            }
            else if(activity === "5"){
                AMR = (BMR * 1.9).toFixed(0)
            }

            setResultCalories(`Your daily calories estimate is: ${AMR} kcal`)
        }
    }

  return (
    <div className="CalorieCalculator-main">

        <h1>{resultCalories}</h1>

        <form onSubmit={submitForm} className="CalorieCalculator-form">
            <div className="CalorieCalculator-input">
                <label htmlFor="age">Age</label>
                <input name="age" type="number" onChange={(e)=>{setAge(e.target.value)}}/>
                <label htmlFor="age">years</label>
            </div>
            <div className="CalorieCalculator-input">
                <input type="radio" name="gender" value="male" onChange={(e)=>{setGender(e.target.value)}}/>Male
                <input type="radio" name="gender" value="female" onChange={(e)=>{setGender(e.target.value)}}/>Female
            </div>
            <div className="CalorieCalculator-input">
                <label htmlFor="height">Height</label>
                <input name="height" type="number" onChange={(e)=>{setHeight(e.target.value)}}/>
                <label htmlFor="height">cm</label>
            </div>
            <div className="CalorieCalculator-input">
                <label htmlFor="weight">Weight</label>
                <input name="weight" type="number" onChange={(e)=>{setWeight(e.target.value)}}/>
                <label htmlFor="weight">kg</label>
            </div>
            <div className="CalorieCalculator-select">
                <label htmlFor="activity">Activity</label>
                <select name="activity" onChange={(e)=>{setActivity(e.target.value)}}>
                    <option value="1">Sedentary (little or no exercise)</option>
                    <option value="2">Lightly active (exercise 1-3 days/week)</option>
                    <option value="3">Moderately active (exercise 3-5 days/week)</option>
                    <option value="4">Active (exercise 6-7 days/week)</option>
                    <option value="5">Very active (hard exercise 6-7 days/week)</option>
                </select>
            </div>
            <input className="CalorieCalculator-submit" type="submit" value="Calculate"/>
        </form>

        <h3>Remember that this estimate is based on your body weight, height, age, gender, and your average level of activity. You can use this information to help you figure out how many calories you should be consuming to maintain your weight.</h3>
    </div>
  )
}

export default CalorieCalculator