import React from 'react'
import { NavLink } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Navbar = () => {
  return (
    <header style={{display: 'flex' , justifyContent: 'center', padding: '5px' ,  border: '1px solid gray'}}>
      <Stack spacing={2} direction="row">
          <Button variant="outlined"><NavLink className={ ({isActive}) => isActive ? 'active' : '' } to = '/gif' >gifs</NavLink></Button>
          <Button variant="outlined"><NavLink to = '/stikers' >stikers</NavLink></Button>
      </Stack>

    </header>
  )
}
