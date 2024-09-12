import React from 'react'
import MultiActionAreaCard from '../../components/Card'
import { Box, Typography } from '@mui/material'

function Home() {
  return (
    <>
    <Typography className='text-center mt-4' variant='h4'>Our Products</Typography>
    <Box className='d-flex container justify-content-center gap-4 flex-wrap mt-4'>
      <MultiActionAreaCard/>
    </Box>
    </>
  )
}

export default Home