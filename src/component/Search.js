import React, {useState} from 'react'
import './Search.css'

import "react-date-range/dist/styles.css";          // main style file for Date picker
import "react-date-range/dist/theme/default.css";   // theme css file

import {DateRangePicker} from "react-date-range";
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';

// DATE PICKER COMPONENT
function Search() {

    // keeps track of url
    const history = useHistory();

    // TODOs in order to use DateRangePicker

    // let default vale of startDate is todays date
    const [startDate, setStartDate] = useState(new Date());
    
    // let default vale of endDate is todays date
    const [endtDate, setEndtDate] = useState(new Date());

    // defined object
    const selectionRange = {
        startDate: startDate,
        endDate: endtDate,
        key: "selection"
    };

    // function that is responsible when we select date
    const handleSelect = ranges => {
        setStartDate(ranges.selection.startDate);
        setEndtDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>
                Number of guests
                <PeopleIcon/>
            </h2>
            <input min={0} defaultValue={2} type="number"/>    
            <Button onClick={()=>history.push('/search')}>Search Airbnb</Button>
        </div>
    )
}

export default Search
