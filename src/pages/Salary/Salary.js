import "./Salary.css"
import { useState } from "react"

const Salary = () => {
    //attributes we get from input
    const [cash, setCash] = useState("")
    const [period, setPeriod] = useState("1")
    const [weekHours, setWeekHours] = useState("")
    const [weekDays, setWeekDays] = useState("")

    //attributes which are calculated and then shown
    const [annually, setAnnually] = useState("0")
    const [monthly, setMonthly] = useState("0")
    const [weekly, setWeekly] = useState("0")
    const [daily, setDaily] = useState("0")
    const [hourly, setHourly] = useState("0")

    
    const submitForm = (event) => {
        event.preventDefault()
        
        //only of all attributes are present, code continues
        if(cash && period && weekHours && weekDays){
            //declaration of all the , which will be calculated
            let dayHours, hourPay, dayPay, weekPay, monthPay, annualPay
            
            //if period value is 1, calculations start from hourPay
            if(period === "1"){
                dayHours = (parseFloat(weekHours) / parseFloat(weekDays))
                hourPay = parseFloat(cash)
                dayPay = hourPay * dayHours
                weekPay = hourPay * dayHours * parseFloat(weekDays)
                monthPay = hourPay * dayHours * (260 / 12)
                annualPay = hourPay * dayHours * 260
                
            }
             //if period value is 2, calculations start from annualPay
            if(period === "2"){
                annualPay = parseFloat(cash) * 12
                monthPay = parseFloat(cash)
                weekPay = monthPay / 4
                dayPay = monthPay / 20
                hourPay = dayPay / (parseFloat(weekHours) / parseFloat(weekDays))
            }

            //after all calculations, result are shown on the page
            setHourly(`${(hourPay).toFixed(2)} €`)
            setDaily(`${(dayPay).toFixed(2)} €`)
            setWeekly(`${(weekPay.toFixed(2))} €`) 
            setMonthly(`${(monthPay.toFixed(2))} €`)
            setAnnually(`${(annualPay.toFixed(2))} €`)

        }
    }

  return (
    <div className="Salary-main">

        <h1 className="Salary-text">Salary Calculator</h1>

        <form className="Salary-form" onSubmit={submitForm}>

            <h2 className="Salary-text">Salary amount</h2>

            <div className="Salary-input">
                <label htmlFor="cash">Cash</label>
                <input  name="cash" type="number" onChange={(e)=>{setCash(e.target.value)}}/>
            </div>
            
            <div className="Salary-select">
                <label htmlFor="period">per </label>

                <select name="period" onChange={(e)=>{setPeriod(e.target.value)}}>
                    <option value="1">Hour</option>
                    <option value="2">Month</option>
                </select>
            </div>

            <div className="Salary-input">
                <label htmlFor="weekHours">Hours per week</label>
                <input name="weekHours" type="number" onChange={(e)=>{setWeekHours(e.target.value)}}/>
            </div>

            <div className="Salary-input">
                <label htmlFor="weekDays">Days per week</label>
                <input name="weekDays" type="number" onChange={(e)=>{setWeekDays(e.target.value)}}/>
            </div>

            <input className="Salary-submit" type="submit" value="Calculate"/>
        </form>

        <div className="Salary-table-section">
            <h3 className="Salary-text">Result</h3>

            <table className="Salary-table">
                <tbody>
                    <tr className="Salary-table-categories">
                        <td>Time period</td>
                        <td>Cash earnings</td>
                    </tr>
                    <tr className="Salary-table-row">
                        <td>Hourly</td>
                        <td>{hourly}</td>
                    </tr>
                    <tr className="Salary-table-row">
                        <td>Daily</td>
                        <td>{daily}</td>

                    </tr>
                    <tr className="Salary-table-row">
                        <td>Weekly</td>
                        <td>{weekly}</td>
                    </tr>
                    <tr className="Salary-table-row">
                        <td>Monthly</td>
                        <td>{monthly}</td>
                    </tr>
                    <tr className="Salary-table-row">
                        <td>Annually</td>
                        <td>{annually}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Salary