import React from 'react';
import image from './team.png'

function Card()
{
    // const image = "team.png";
    return <div style={{display: "flex",justifyContent: "center"}}>
        {/* <div><p>This image comes from Card component in card.js</p></div> */}
        <div><img src={image} height={400} width={400}/></div>

    </div>
}

export default Card;