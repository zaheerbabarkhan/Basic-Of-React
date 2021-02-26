import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'



function Element(props)
{
  const [available, setAvailbe] = React.useState(true);

  return (
    <div className={available ? "yes" : "no"}>
    <div>this will be shown on the basis of availablity</div>
    <div>Is it available {available ? "yes" : "no"}</div>
    <button onClick={() => setAvailbe(!available)}>Change availablity</button>
    </div>
  );
}


ReactDom.render(<Element />, document.querySelector('#root'));