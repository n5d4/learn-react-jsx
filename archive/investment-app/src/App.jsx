import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputId, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputId]: +newValue
            };
        });
    }

    const inputIsValid = userInput.duration >= 1;

    return (
        <>
            <Header/>
            <UserInput onChange={handleChange} userInput={userInput}/>
            {inputIsValid && <Results userInput={userInput}/>}
            {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
        </>
    );
}

export default App
