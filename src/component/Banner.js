import React, {useState} from 'react'
import './Banner.css';
import {Button} from '@material-ui/core';
import Search from './Search';
import { useHistory } from 'react-router-dom';

function Banner() {

    // keeps track of url
    const history = useHistory();
    
    // state: for Hide & display search-Button
    const [showSearch, setShowSearch] = useState(false); 
    
    return (
        
        <div className="banner">

            {/* for date search */}
            <div className="banner_search">
                
                {/* if showSearch is true then display search component, <search/> will handle airbnb date picker functionality */}
                {showSearch && <Search/>}
                
                <Button onClick={()=>setShowSearch(!showSearch)} className="banner_searchButton" variant='outlined'>
                    {showSearch ? "Hide" : "Search dates"}
                </Button>
            </div>

            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>

                {/* instead of history.push we can also use 'Link to' */}
                <Button onClick={()=>history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </div>

        </div>
    )
}

export default Banner;
