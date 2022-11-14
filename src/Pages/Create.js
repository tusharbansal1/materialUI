import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(()=>({

}));

export default function Create() {
  const classes = useStyles()
  return (
    <div>
        <Typography 
        variant='h3'
        component='h6'
        color="secondary"
        gutterBottom align='center'>
           Create a new blog
            </Typography>
            <Typography color="error" noWrap> 
        Nostrud labore enim consequat et officia dolore labore pariatur consectetur.Cillum aliqua ut et et veniam qui do commodo magna sit aute culpa sint mollit.Quis culpa ex incididunt Lorem culpa ipsum dolore id dolor tempor nostrud mollit exercitation cillum.
            </Typography>
            <Button 
    
            variant="contained"
            color='secondary'
            type='submit'
            onClick={()=>{console.log("You clicked")}}>
              Submit 
            </Button>
            <br></br><br></br><br></br>
          <ButtonGroup 
          variant='contained'
          color='primary'
          disableElevation
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            </ButtonGroup>
           
    </div>
    
  )
}
