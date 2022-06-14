import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './currency.css'
export default function Currency() {
    //api_key = 3f721942cddb3b199905f3aea4bb647d
    //API http://api.currencylayer.com/list?access_key=3f721942cddb3b199905f3aea4bb647d
    const [currenciesList, setCurrenciesList] = useState([]);

    return (
        <div className='currency-rate-container'>
        
        </div>
    )
}
