import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import {Link} from "react-router-dom"; 

function Header() {
    return (

        // parent container which contain multiple child
        <div className='header'>
            
            <Link to="/">
                {/* img container which contain only one child */}
                <img 
                    className="header_icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
        
            {/* searchBar container: after logo, which contain 2 child */}
            <div className="header_center">
                
                {/* 1.searchBar  */}
                <input type="text" />

                {/* 2.searchBar logo, imported from Material UI */}
                <SearchIcon />
            </div>
        
        
            {/* right side container which contains 3/4 child */}
            <div className="header_right">

                {/* 1.text */}
                <p>Switch to hosting</p>

                {/* 2.language icon */}
                <LanguageIcon />

                {/* 3.expandmore icon */}
                <ExpandMoreIcon />

                {/* 4.avatar */}
                <Avatar />

            </div>
        </div>
    )
}

export default Header
