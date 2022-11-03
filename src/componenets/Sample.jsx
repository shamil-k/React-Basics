import React from 'react'
import { useParams } from 'react-router-dom'

export default function Sample() {
    const id = useParams('itemId')
    console.log("id", id);
    return (

        <>

            <h2>Hover Tabs</h2>
            <p>Move the mouse over a button inside the tabbed menu:</p>
            <div className="tab">
                <button className="tablinks" onmouseover="openCity(event, 'London')">
                    London
                </button>
                <button className="tablinks" onmouseover="openCity(event, 'Paris')">
                    Paris
                </button>
                <button className="tablinks" onmouseover="openCity(event, 'Tokyo')">
                    Tokyo
                </button>
            </div>
            <div id="London" className="tabcontent">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
            </div>
            <div id="Paris" className="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p>
            </div>
            <div id="Tokyo" className="tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div>
            <div className="clearfix" />
        </>

    )
}
