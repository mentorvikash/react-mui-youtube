import { Typography } from '@mui/material'
import React from 'react'

function MuiTypography() {
  return (
    <>
      <Typography variant='h1'  >Heading 1</Typography>
      <Typography variant='h2' >Heading 2</Typography>
      <Typography variant='h3' component={"h1"} >Heading 3</Typography>
      <Typography variant='h4' >Heading 4</Typography>
      <Typography variant='h5' >Heading 5</Typography>
      <Typography variant='h6' >Heading 6</Typography>
      <Typography variant='subtitle1' >This is my subtitle1</Typography>
      <Typography variant='subtitle2' >This is my subtitle2</Typography>
      <Typography variant='body1' >Body 1</Typography>
      <Typography variant='body2' >Body 2</Typography>


    </>
  )
}

export default MuiTypography