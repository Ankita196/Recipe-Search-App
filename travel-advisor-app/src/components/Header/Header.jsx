import React from 'react'
import {Autocomplete}  from "@react-google-maps/api"
import {AppBar ,Toolbar ,Typography,InputBase ,Box} from "@material-ui/core"
import SearchIcon from  "@material-ui/icons/Serach"

const Header = () => {
    return (
        <AppBar> 
            <Toolbar position="static">
                <Typography varient="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box> 
                <Typography varient="h6" className={classes.title}>
                    Explore new places
                </Typography>
                <Autocomplete>
                    <div className={classes.search}>
                      <div classNme={classes.searchIcon}>
                          <SearchIcon />
                      </div>
                      <InputBase placeholder="search.." clasess={{root:classes.inputRoot, input :classes.inputInput}}/>
                    </div>
                </Autocomplete>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Header
