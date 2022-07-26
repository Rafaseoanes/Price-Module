import React from 'react'
import './Prices.css'

function Prices(props) {
  return (
    <div className='card'>
        <div className='priceHead' >
        <div style={{ backgroundColor: props.data.color}} className='priceTitle'>
        <h2>&#36;{props.data.price}</h2>
        </div>
        </div>
        
        <hr style={{height: 1,
        backgroundColor: props.data.color,
        border: "none"}}  />

        <h3>{props.data.title}</h3>

        <hr style={{height: 1,
        backgroundColor: props.data.color,
        border: "none"}}  />
        <ul>
            <li>{props.data.li1} </li>
            <li>{props.data.li2} </li>
            <li>{props.data.li3} </li>
            <li>{props.data.li4}</li>
        </ul>
        <button>Purchase</button>



    </div>
  )
}

export default Prices