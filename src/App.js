import React from 'react'
import './style.css'
export default function App() {
    const fname = [1]
    return (
        <div style={{ display: 'inline' }}>
            {fname.map((itm) => (

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img
                                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                                alt="Avatar"
                                style={{ width: 300, height: 300 }}
                            />
                        </div>
                        <div className="flip-card-back">
                            <h1>{itm}</h1>
                            <p>Architect &amp; Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>



            ))
            }
        </div >
    )
}
