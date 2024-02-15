import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}><b>My Blog</b>
                </Link>
                   
                </Typography> &nbsp;&nbsp;
                <Button variant='contained' color='success'><Link to={'/'} style={{textDecoration:'none',color:'white'}}>home</Link></Button> &nbsp;
                <Button variant='contained' color='error'><Link to={'/add'} style={{textDecoration:'none',color:'white'}}>add blog</Link></Button>
            </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default NavBar