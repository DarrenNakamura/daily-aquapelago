import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Square value={23} />
        </>
    )
}

function Square({ value }) {
    const [state, setState] = useState(0);

    function handleClick() {
        setState((state + 1) % 3);
    }

    if (state == 0) {
        return (
            <button className="square unknown" onClick={handleClick}>{value}</button>
        );
    }
    else if (state == 1) {
        return (
            <button className="square shaded" onClick={handleClick}>{value}</button>
        );
    }
    else if (state == 2) {
        return (
            <button className="square unshaded" onClick={handleClick}>{value}</button>
        );
    }
}

export default App
