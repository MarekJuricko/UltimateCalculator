import "../Style.css"
import React, { useState, useEffect } from 'react';

const AgeCalculator = () => {
    //variables we get from input
    const [birthDate, setBirthDate] = useState("")
    const [currentDate, setCurrentDate] = useState(new Date());

    //variables which are calculated and then shown
    const [age, setAge] = useState("")
    const [days, setDays] = useState("")
    const [hours, setHours] = useState("")
    const [minutes, setMinutes] = useState("")
    const [seconds, setSeconds] = useState("")

    const submitForm = (event) => {
        event.preventDefault()

        //code continues only if birthDate is not empty string
        if(birthDate !== ""){
            //variables, which will be used for calculations
            let todaysDate = new Date(currentDate)
            let chosenDate = new Date(birthDate)

            //calculating differences between tadaysDate and chosenDate
            let yearDiff = todaysDate.getFullYear() - chosenDate.getFullYear()
            let monthDiff = todaysDate.getMonth() - chosenDate.getMonth()
            let dayDiff = todaysDate.getDate() - chosenDate.getDate()

            //if dayDiff is negative, we need to adjust the month and day
            if (dayDiff < 0) {
                monthDiff -= 1;
                const tempDate = todaysDate
                tempDate.setMonth(todaysDate.getMonth() - 1)
                dayDiff += (todaysDate - tempDate) / (1000 * 60 * 60 * 24)
            }

            //if monthDiff is negative, we substract 1 from yearDiff and add 12 to the monthDiff
            if (monthDiff < 0) {
                yearDiff -= 1;
                monthDiff += 12;
            }

            //calculatiing values for table
            const differenceInMiliseconds = todaysDate - chosenDate
            const differenceInSeconds = Math.floor(differenceInMiliseconds / 1000)
            const differenceInMinutes = Math.floor(differenceInMiliseconds / (1000 * 60))
            const differenceInHours = Math.floor(differenceInMiliseconds / (1000 * 60 * 60))
            const differenceInDays = Math.floor(differenceInMiliseconds / (1000 * 60 * 60 * 24))
            
            //after all calculations, formatted results are shown on the page
            setAge(`${yearDiff} years, ${monthDiff} months, ${dayDiff} days`)
            setDays(`${differenceInDays.toLocaleString()} days`)
            setHours(`${differenceInHours.toLocaleString()} hours`)
            setMinutes(`${differenceInMinutes.toLocaleString()} minutes`)
            setSeconds(`${differenceInSeconds.toLocaleString()} seconds`)
        }
    }

    //each time page is load, current date is shown 
    useEffect(() => {
      setCurrentDate(currentDate)
    },[currentDate])
  
    return (
      <div className="main">

        <h1 className="text">Age Calculator</h1>

        <div className="form-section" onSubmit={submitForm}>

            <form className='form'>
                <div className='input'>
                    <label htmlFor="birthDate">Enter your birth date:</label>
                    <input 
                    name="birthDate" 
                    type="date" 
                    value={birthDate}
                    onChange={(e)=>setBirthDate(e.target.value)}/>
                </div>

                <input className="submit" type="submit" value="Calculate"/>
            </form>

            <h3 className="text">{age}</h3>

            <div className="table-section">
                <h3 className="text">Result</h3>

                <table className="table">
                    <tbody>
                        <tr className="table-categories">
                            <td>Days</td>
                            <td>Hours</td>
                            <td>Minutes</td>
                            <td>Seconds</td>
                        </tr>
                        <tr className="table-row">
                            <td>{days}</td>
                            <td>{hours}</td>
                            <td>{minutes}</td>
                            <td>{seconds}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text">Current Date: {currentDate.toDateString()}</p>
        </div>

      </div>
    );
}

export default AgeCalculator