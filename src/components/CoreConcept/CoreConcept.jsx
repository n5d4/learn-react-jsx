import './CoreConcept.css';

function CoreConcept({image, title, description}) {
    return <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
}

export default function CoreConceptList({ CORE_CONCEPTS }) {
    return (
        <ul>
            {CORE_CONCEPTS.map((concept, index) => (
                <CoreConcept key={index} {...concept} />
            ))}
        </ul>
    )
}