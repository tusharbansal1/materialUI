import React from 'react'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({

})

export default function Blogs() {
  const classes=useStyles()
  return (
    <div>Blogs page <br />
       <AcUnitOutlinedIcon fontSize="large" color="primary" /><br/>
       <Button 
       variant="contained" startIcon={<SendIcon />}>
        Submit
       </Button>
        </div>
  )
}
