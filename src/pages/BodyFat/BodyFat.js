import "../Style.css"
import { useState } from "react"

const BodyFat = () => {
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [neck, setNeck] = useState("")
    const [waist, setWaist] = useState("")
    const [hip, setHip] = useState("")
    const [bodyFat, setBodyFat] = useState("Body Fat Calculator")
    const [fatMass, setFatMass] = useState("Please, set your attributes to continue")
    const [leanMass, setLeanMass] = useState("")
    
    //function for computing fat mass
    const fatMassComputation = (result, weight) => {
        return ((parseFloat(result) / 100) * parseFloat(weight)).toFixed(1)
    }

     //function for computing lean mass
    const leanMassComputation = (weight, fatMass) => {
        return (parseFloat(weight) - parseFloat(fatMass)).toFixed(1)
    }

    //function is called when form is submitted
    const submitForm = (event) => {
        event.preventDefault()

        //if everything except hip attributes is filled, code continues
        if(gender && age && weight && height && neck && waist){
            let result

            //in female computation there must be hip attribute, therefore code continues only if gender is female and hip attribute is present
            if(gender === "female" && hip){
                //Body fat percentage formula for women
                result = ((495 / (1.29579 - 0.35004 * Math.log10( parseFloat(waist) + parseFloat(hip) - parseFloat(neck) ) + 0.22100 * Math.log10( parseFloat(height) )))-450).toFixed(1)

                //when result is realistic (not lower than 0% /not higher than 100%), code sets BodyFat,FatMass and LeanMass attributes
                if(0 <= result && result <= 99.9){
                    try{
                        setBodyFat(`Your body fat is ${result}%`)
                        setFatMass(`Your Body Fat mass is ${fatMassComputation(result,weight)}kgs.`)
                        setLeanMass(`Your lean body mass is ${leanMassComputation(weight,fatMassComputation(result,weight))}kgs.`)
                    }catch (err){
                        console.log(err.message);
                    }
                }else{
                    setBodyFat(`Error`)
                    setFatMass(`You set unrealistic attributes`)
                    setLeanMass(``)
                }
            }
            //in male computation hip attribute is not required, so if gender is male, code continues normally
            else if(gender === "male"){
                //Body fat percentage formula for men
                result = ((495 / (1.0324 - 0.19077 * Math.log10( parseFloat(waist) - parseFloat(neck) ) + 0.15456 * Math.log10( parseFloat(height) ))) - 450).toFixed(1)

                //when result is realistic (not lower than 0% /not higher than 100%), code sets BodyFat,FatMass and LeanMass attributes
                if(0 <= result && result <= 99.9){
                    try{
                        setBodyFat(`Your body fat is ${result}%`)
                        setFatMass(`Your Body Fat mass is ${fatMassComputation(result,weight)}kgs.`)
                        setLeanMass(`Your lean body mass is ${leanMassComputation(weight,fatMassComputation(result,weight))}kgs.`)
                    }catch (err){
                        console.log(err.message);
                    }
                }else{
                    setBodyFat(`ERROR`)
                    setFatMass(`You set unrealistic attributes`)
                    setLeanMass(``)
                }
            }
        }
    }

  return (
    <div className="main">

        <div className="text">
            <h1>{bodyFat}</h1>
            <h3>{fatMass} {leanMass}</h3>
        </div>
    
        <form className="form" onSubmit={submitForm}>
            <div className="input">
                <input type="radio" name="gender" value="male" onChange={(e)=>{setGender(e.target.value)}}/>Male
                <input type="radio" name="gender" value="female" onChange={(e)=>{setGender(e.target.value)}}/>Female
            </div>
            <div className="input">
                <label htmlFor="age">Age</label>
                <input name="age" type="number" onChange={(e)=>{setAge(e.target.value)}}/>
                <label htmlFor="age">years</label>
            </div>
            <div className="input">
                <label htmlFor="weight">Weight</label>
                <input name="weight" type="number" onChange={(e)=>{setWeight(e.target.value)}}/>
                <label htmlFor="weight">kg</label>
            </div>
            <div className="input">
                <label htmlFor="height">Height</label>
                <input name="height" type="number" onChange={(e)=>{setHeight(e.target.value)}}/>
                <label htmlFor="height">cm</label>
            </div>
            <div className="input">
                <label htmlFor="neck">Neck</label>
                <input name="neck" type="number" onChange={(e)=>{setNeck(e.target.value)}}/>
                <label htmlFor="neck">cm</label>
            </div>
            <div className="input">
                <label htmlFor="waist">Waist</label>
                <input name="waist" type="number" onChange={(e)=>{setWaist(e.target.value)}}/>
                <label htmlFor="waist">cm</label>
            </div>
            <div className="input">
                <label htmlFor="hip">Hip</label>
                <input name="hip" type="number" onChange={(e)=>{setHip(e.target.value)}}/>
                <label htmlFor="hip">cm</label>
            </div>
            
            <input className="submit" type="submit" value="Calculate"/>
        </form>
        
        <div className="table-section">
            <h3 className="text">Body fat categorization</h3>

            <table className="table">
                <tbody>
                    <tr className="table-categories">
                        <td>Description</td>
                        <td>Men</td>
                        <td>Women</td>
                    </tr>
                    <tr className="table-row">
                        <td>Essencial fat</td>
                        <td>2 - 5%</td>
                        <td>10 - 13%</td>
                    </tr>
                    <tr className="table-row">
                        <td>Athletes</td>
                        <td>6 - 13%</td>
                        <td>14 - 20%</td>
                    </tr>
                    <tr className="table-row">
                        <td>Fitness</td>
                        <td>14 - 17%</td>
                        <td>21 - 24%</td>
                    </tr>
                    <tr className="table-row">
                        <td>Average</td>
                        <td>18 - 24%</td>
                        <td>25 - 31%</td>
                    </tr>
                    <tr className="table-row">
                        <td>Obese</td>
                        <td>25+%</td>
                        <td>32+%</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default BodyFat