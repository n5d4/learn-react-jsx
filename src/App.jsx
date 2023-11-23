import './App.css'
import componentsImg from './assets/react.svg'
import {CORE_CONCEPTS} from "./data.js";


const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)]

    return (
        <header>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}


function CoreConcept({image, title, description}) {
    return <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
}

function CoreConceptList({ CORE_CONCEPTS }) {
    return (
        <ul>
            {CORE_CONCEPTS.map((concept, index) => (
                <CoreConcept key={index} {...concept} />
            ))}
        </ul>
    )
}

function App() {
    return (
        <>
            <Header/>
            <main>
                <div id="core-concepts">
                    <h2>Core Concepts</h2>
                    <CoreConceptList CORE_CONCEPTS={CORE_CONCEPTS} />
                </div>

            </main>
        </>
    )
}

export default App
