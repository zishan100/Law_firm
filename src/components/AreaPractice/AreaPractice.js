import React from 'react'
import { Typography } from '@mui/material'
import style from './AreaPractice.module.css'
import BusinessLawImg from '../../assets/Rectangle 3652.png' 

export default function AreaPractice() {
  return (
    <div className={style.practiceContainer} >
        <Typography variant='h3' gutterBottom sx={{ textAlign:'center' , marginBottom:'3rem' , fontWeight:600 }}>Area of Practices</Typography>
        
        <div className={style.gridContainer} >
            <div className={style.item1}>BUSINESS LAW</div>
            <div className={style.item2}>Partnership LAW</div>
            <div className={style.item3}>REAL ESTATE LAW</div>
            <div className={style.item4}>BUSINESS LAW</div>
            <div className={style.item5}>LANDLORD DISPUTES</div>
            <div className={style.item6}>ELDER ABUSE</div> 
        </div>
    </div>
  )
}
