import React from 'react';
import ReactDom from 'react-dom'
import Hello from './hello.js'
import Card from './card'

function App() {

    var student = { name: 'Zaheer Ud Din Babar', age: 25, marks: "80%" };
    return <div>
        <Hello student={student} />
        <br />
        <br />
        <Card />
        <div>
            <h1 style={{ textAlign: "center" }}>This is evaluated using expression like 100 + 100 = {100 + 100}</h1>
        </div>
        <h1 style={{textAlign: "center"}}>This text was added after the configuration of autodeployment from githUb</h1>
    </div>
}



export default App;