import React, { useEffect, useState } from 'react'

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


    // console.log("data: ", data);
    return (

        <div>

            <button onClick={fetchAPI}>Call API</button>

            {data.map((itm, index) => (

                <div className="card" key={index}>
                    <img src={itm.image} style={{ width: "150px", height: "150px" }}></img>
                    <div className="container">
                        <h4>
                            <b>{itm.title}</b>
                        </h4>
                        <p>price : ${itm.price}</p>
                    </div>
                </div>


            ))}

        </div>
    )
}
