import * as React from 'react';
import { useState } from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
//import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@material-ui/core';
//import { makeStyles } from '@mui/material';
//import NavbarCSS from '../css/material-css/Navbar';
//import { borderColor, padding } from '@mui/system';
import "./Nav.css";


const SearchBar = ({ setSearchQuery }) => (
    <form>
        <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
                setSearchQuery(e.target.value);
            }}
            variant="outlined"
            placeholder="Search for Products..."
            size="small"
        />
        <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "light green" }} className="text1" ></SearchIcon> </IconButton>
    </form>
);

const filterData = (query, data) => {
    if (!query) {
        return data;
    } else {
        return data.filter((d) => d.toLowerCase().includes(query));
    }
};


const data = [];

function StaticNav() {
    const [searchQuery, setSearchQuery] = useState();
    const dataFiltered = filterData(searchQuery, data);

    return (
        <div className='nav'>
            <img className='img' src="green-logo.png" alt="" />
            <div className='locationpin'>
                <i class="fa-xs">
                    <LocationOnIcon className='locationpin1' />
                </i>
            </div>&nbsp;&nbsp;&nbsp;
            <div className='locationCities'>
                <Typography className='select' variant='p'>
                    Select Location
                </Typography><br />
                <Typography className="city" variant='p'>
                    Maharastra India...
                    {/* <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Select your city for start shopping
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.dark" gutterBottom>
                            TOP CITIES
                        </Typography><br />
                        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                            Bangaluru
                        </Typography>
                        <Divider />
                        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                            Noida
                        </Typography>
                        <Divider />
                        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                            Delhi
                        </Typography>
                        <Divider />
                        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                            Mumbai
                        </Typography>
                    </CardContent>
                </Card> */}
                </Typography>
            </div>&nbsp;&nbsp;&nbsp;
            
            <div className='Searchbar'>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} className='Searchbar1'></SearchBar> 
                {/* <div className='search'>
                    {dataFiltered.map((d) => (
                        <div
                            className="text"
                            style={{
                                fontSize: 20,
                                color: "black",
                                width: "450px",
                                BorderColor: "green",
                                borderWidth: "10"
                            }}
                            key={d.id}
                        >
                            {d}
                        </div>
                    ))}
                </div> */}
            </div>&nbsp; &nbsp; &nbsp; &nbsp;
            <div className='icons'>
                {/* <AccountCircleRoundedIcon />&nbsp; &nbsp; */}
                <LoginRoundedIcon />&nbsp; &nbsp;
                <CircleNotificationsRoundedIcon />&nbsp; &nbsp;
                <ShoppingCartRoundedIcon />
            </div>
        </div>
    )
}

export default StaticNav;