import "../Style.css"
import { useState } from "react"

const PasswordGenerator = () => {
    const [password, setPassword] = useState('Please include at least one characters set for the password to be based on');
    const [passwordLength, setPasswordLength] = useState(10);
    const [charactersForPass, setCharactersForPass] = useState([]);
    const [entropyValue, setEntropyValue] = useState('');
    const [entropyValueComment, setEntropyValueComment] = useState('');
    const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const specialSymbols = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ':', ';', '<', '>', ',', '.', '?', '/'];
    
    //function for updating the array with the character
    const arrayUpdate = (event) => {
        
        //refactored function for updating array
        const arrayHandler = (array) => {
            //if the checkbox is checked = true, array is added to the charactersForPass
            if(event.target.checked === true){
                setCharactersForPass(charactersForPass.concat(array));
            //if the checkbox is not checked = false, array is removed from the charactersForPass
            }else if(event.target.checked === false){
                setCharactersForPass(charactersForPass.filter((element) => !array.includes(element)));
            }
        }

        switch(event.target.name){
            case "lowerCase":
                arrayHandler(lowercaseLetters)
                break;
            case "upperCase":
                arrayHandler(uppercaseLetters)
                break;
            case "digits":
                arrayHandler(digits)
                break;  
            case "special":
                arrayHandler(specialSymbols)
                break;
            default:
                arrayHandler(null)
                break;       
        }
    }

    //function for defining password strength based on entropy value
    const entropyComment = (entropy) => {
        if (entropy < 25) {
            setEntropyValueComment('weak. Think about choosing a stronger one!');
        }
        else if (entropy >= 25 && entropy <= 35) {
            setEntropyValueComment('reasonable. It will do for non-vital accounts!');
        }
        else if (entropy > 35 && entropy <= 60) {
            setEntropyValueComment('strong. Well done!');
        } 
        else if (entropy > 60 && entropy <= 130) {
            setEntropyValueComment('very strong. Excellent job!');
        } 
        else if (entropy > 130) {
            setEntropyValueComment('extremely strong. A bit overkill, really!');
        }
        
    }

    //function is called on button click
    const submitForm = (event) => {
        event.preventDefault()
        
        //only if charactersForPass array is filled with some characters, code continues
        if(charactersForPass.length !== 0){
            let result = ""
            //password is randomly created based on chosen length  
            for(let i = 0; i < passwordLength; i++){
                let randomIndex = Math.floor(Math.random() * charactersForPass.length)
                result = result + charactersForPass[randomIndex]
            }

            setPassword(result)

            //password entropy value is calculated with characterVariety number (amount of characters in charactersForPass array) and chosen password length
            const characterVariety = charactersForPass.length;
            const entropy = passwordLength * Math.log2(characterVariety);
            setEntropyValue(`Password entropy: ${entropy.toFixed(2)} bits  =`); 
            entropyComment(entropy.toFixed(2))       
        }
        else{
            setPassword('Please include at least one characters set for the password to be based on')
            setEntropyValue('')
            setEntropyValueComment('')
        }       

    }

  return (
    <div className="main">

        <div className="text">
            <h1>Password Generator</h1>
            <h2>{password}</h2>
            <h3>{entropyValue} {entropyValueComment}</h3>
        </div>
    
        <form className="form" onSubmit={submitForm}>
            <div className="input">
                <label htmlFor="passLength">Password length: {passwordLength} characters</label>
                <input className="input-range" type="range" min="4" max="50" name="passLength" value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)}/>
            </div>
            <div className="input">
                <input type="checkbox" name="lowerCase" onChange={(e)=>{arrayUpdate(e)}}/>
                <label htmlFor="lowerCase">Include lower case</label>
            </div>
            <div className="input">
                <input type="checkbox" name="upperCase" onChange={(e)=>{arrayUpdate(e)}}/>
                <label htmlFor="upperCase">Include upper case</label>
            </div>
            <div className="input">
                <input type="checkbox" name="digits" onChange={(e)=>{arrayUpdate(e)}}/>
                <label htmlFor="digits">Include numbers</label>
            </div>
            <div className="input">
                <input type="checkbox" name="special" onChange={(e)=>{arrayUpdate(e)}}/>
                <label htmlFor="special">Include symbols</label>
            </div>
                        
            <input className="submit" type="submit" value="Generate"/>
        </form>

    </div>
  )
}

export default PasswordGenerator