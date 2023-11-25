import {useState} from "react";
import './App.css'
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConceptList from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('Please click a button');

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <>
            <Header/>
            <main>
                <div id="core-concepts">
                    <h2>Core Concepts</h2>
                    <CoreConceptList CORE_CONCEPTS={CORE_CONCEPTS}/>
                </div>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onClick={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onClick={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onClick={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onClick={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </>
    )
}

export default App