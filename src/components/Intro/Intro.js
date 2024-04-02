import React from 'react'
import style from './Intro.module.css';
import { Typography } from '@mui/material';

export default function Intro() {
  return (
    <div className={style.introContainer} >
        <Typography variant='h4'  gutterBottom sx={{width:'30%',fontWeight:600 , color:'#FFFFFF'}} >
          Let’s Introduce Ourself
        </Typography>
        <div className={style.hrline} ></div>
        <div className={style.titleIntro} >
           <Typography variant='h5' gutterBottom sx={{fontWeight:600}} >Criminal Lawyer</Typography>
           <Typography variant='body1' gutterBottom sx={{ opacity:'0.3' }} >
                Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequatduis
                enim velit mollit Exercitation.
           </Typography>   
        </div>
    </div>
  )
}
