import { Box, Container, Grid,  } from '@mui/material'
import React from 'react'




function Followers() {

//  const classes = useStyles();

  return (
    <div>
    <Container>
         <Box 
        boxShadow={12}
        sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'column' ,sm:'column',lg: 'row'},
        alignItems : 'center',
    justifyItems : 'center',
    justifyContent : 'center',
        overflow: 'hidden',
        borderRadius: '12px',
          fontWeight: 'bold',
        padding : '30px',
        border : '3px solid black',
      }}
      >
          <Grid container  >
        <Grid container justifyContent="space-between" direction="row"    >
            <Grid item xs={4} sx={{ paddingLeft: '40px',alignItems:'center', justifyContent:'center'}}>
                Post
            </Grid>
            <Grid item xs={4} sx={{paddingLeft: '40px',alignItems:'center', justifyContent:'center'}}  >
                Follower
            </Grid>
            <Grid item xs={4} sx={{paddingLeft: '40px',alignItems:'center', justifyContent:'center'}}>
                Following
            </Grid>
        </Grid>
        </Grid>
      </Box>
    </Container>

    </div>
  )
}

export default Followers
