import React from 'react'
import style from './ChooseUs.module.css'
import { Typography } from '@mui/material'
import Card from '../Card/Card'

export default function ChooseUs() {
  return (
    <div className={style.container} >
        <Typography variant='h3' gutterBottom sx={{ textAlign:'center' , fontWeight:600 }} >Why Choose us?</Typography>
        <div className={style.cardContainer} >
           { [1,2,3].map((val)=>{
            return <Card key={val} />
           }) }         
        </div> 
    </div>
  )
}
