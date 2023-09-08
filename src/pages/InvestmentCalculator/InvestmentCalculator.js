import "../Style.css"
import { useState } from "react"

const InvestmentCalculator = () => {
    //attributes from input
    const [startAmount, setStartAmount] = useState("")
    const [years, setYears] = useState("")
    const [interest, setInterest] = useState("")
    const [contribution, setContribution] = useState("")
    //attributes which are calculated and then shown
    const [finalAmount, setFinalAmount] = useState("0")
    const [finalContribution, setFinalContribution] = useState("0")
    const [finalInterest, setFinalInterest] = useState("0")
    //arrays with data
    const [contributionsData, setContributionsData] = useState([]);
    const [startingAmountData, setStartingAmountData] = useState([]);
    const [interestData, setInterestData] = useState([]);
    const [endBalanceData, setEndBalanceData] = useState([]);
  
    const submitForm = (event) => {
        event.preventDefault()
        
        //arrays are cleared after form is submitted
        setContributionsData([])
        setStartingAmountData([])
        setInterestData([])
        setEndBalanceData([])
    

        //declaration of variables for further computing
        let totalContribution = parseFloat(startAmount)
        let currentInterest = 0
        let totalWithInterest = parseFloat(startAmount)
        let totalInterest = 0

        //years and interest must be present including startAmount or contribution variable
        if((startAmount || contribution) && years && interest){
            //declaration of arrays which will be containing data
            const contributionsArray = [];
            const startingAmountArray = [];
            const interestArray = [];
            const endBalanceArray = []; 

            //calculations for each month
            for(let i = 1; i <= (years*12); i++){
                //after each change, the data is pushed to the arrays
                totalContribution = totalContribution + parseFloat(contribution)
                contributionsArray.push(totalContribution.toFixed(2))

                totalWithInterest = totalWithInterest + parseFloat(contribution)
                startingAmountArray.push(totalWithInterest.toFixed(2))

                //interest is calculated by the current amount of balance
                currentInterest = parseFloat(((totalWithInterest / 100) * (parseFloat(interest))) / 12)
                interestArray.push(currentInterest.toFixed(2))

                //calculated interest is then added to total balance
                totalWithInterest = totalWithInterest + currentInterest
                endBalanceArray.push(totalWithInterest.toFixed(2))
            } 

            //setting data with previous arrays
            setContributionsData(contributionsArray);
            setStartingAmountData(startingAmountArray);
            setInterestData(interestArray);
            setEndBalanceData(endBalanceArray);
            
            //after calculation, total interest is difference between total contribution and total contribution with interest
            totalInterest = (totalWithInterest - totalContribution).toFixed(2)
        }        
               
        //results are shown on the page
        setFinalContribution(totalContribution)
        setFinalInterest(totalInterest)
        setFinalAmount(totalWithInterest.toFixed(2))

    }
  
  
    return (
    <div className="main">
        <h1 className="text">Investment Calculator</h1>

        <form className="form" onSubmit={submitForm}>

            <div className="form-input">
                <label htmlFor="cash">Starting amount</label>
                <input 
                name="cash" 
                type="number" 
                onChange={(e)=>{setStartAmount(e.target.value)}}/>
            </div>

            <div className="form-input">
                <label htmlFor="years">After</label>
                <input 
                name="years" 
                type="number"  
                placeholder="years" 
                onChange={(e)=>{setYears(e.target.value)}}/>
            </div>

            <div className="form-input">
                <label htmlFor="rate">Return rate</label>
                <input 
                name="rate" 
                type="number" 
                step="0.5" 
                placeholder="%" 
                onChange={(e)=>{setInterest(e.target.value)}}/>
            </div>

            <div className="form-input">
                <label htmlFor="contribution">Monthly contribution</label>
                <input 
                name="contribution" 
                type="number" 
                onChange={(e)=>{setContribution(e.target.value)}}/>
            </div>

            <input className="submit" type="submit" value="Calculate"/>
        </form>

            <h2 className="text">Result</h2>

            <table className="table-section">
                <tbody>
                    <tr className="table-categories">
                        <td>Total Contributions</td>
                        <td>Total Interest</td>
                        <td>End Balance</td>
                    </tr>
                    <tr className="table-row">
                        <td>{finalContribution}</td>
                        <td>{finalInterest}</td>
                        <td>{finalAmount}</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text">More advanced result</h2>

            <table className="table-section">
                <tbody>
                    <tr className="table-categories">
                    <td></td>
                    <td>Contributions</td>
                    <td>Starting Amount</td>
                    <td>Interest</td>
                    <td>End Balance</td>
                 </tr>
                {contributionsData.map((contribution, index) => (
                    <tr className="table-row" key={index}>
                        <td>{index + 1}</td>
                        <td>{contribution}</td>
                        <td>{startingAmountData[index]}</td>
                        <td>{interestData[index]}</td>
                        <td>{endBalanceData[index]}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default InvestmentCalculator