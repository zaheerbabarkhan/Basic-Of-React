import React from 'react';
import ReactDom from 'react-dom'
import './hello.css'
import Concept from './concept.js'


function Hello({student})
{
    
    return <div>
        <p className="hello">Hello World <br/>from: <strong>{student.name}</strong><br/>age: {student.age}</p>
        <Concept/>
    </div>

}
export default Hello;