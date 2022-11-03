import React, { useEffect, useState } from 'react'
import { Link, } from 'react-router-dom'

export default function ApiFetch() {
    useEffect(() => {
        fetchAPI()
    }, [])

    const [data, setdata] = useState([])
    const fetchAPI = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((response) => setdata(response))


    }
    function alertGen() {
        alert("Clicked")
    }

    // console.log("data: ", data);
    return (

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <button onClick={fetchAPI}>Call API</button>

            {data.map((itm, index) => (

                <div className="flip-card">
                    <div className="flip-card-inner">



                        <div className="flip-card-front">
                            <img
                                src={itm.image}
                                alt="Avatar"
                                style={{ width: 300, height: 300 }}
                            />
                        </div>

                        <div className="flip-card-back">
                            <Link to={`/users/${itm.id}`}>

                                <h1>{itm.title}</h1>
                            </Link>

                            <p>Architect &amp; Engineer</p>
                            <p>We love that guy</p>

                        </div>

                    </div>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                    <button onClick={alertGen}>Upload</button>
                </div>


            ))
            }

        </div >
    )
}
