import React from 'react'
import './style.css'
import ApiFetch from './componenets/ApiFetching';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Sample from './componenets/Sample';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/products' element={<ApiFetch />} />
                <Route path='/users/:itemId' element={<Sample />} />
            </Routes>
        </BrowserRouter>



    )
}
