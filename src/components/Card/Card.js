import React from 'react'
import style from './Card.module.css'
import cardIcon from '../../assets/Gift 1.png';
import { Typography } from '@mui/material';

export default function Card({clientName,images}) {
  return (
    <div className={style.cards} >
        <div className={style.giftIcon} >
          <img className={!images ? style.cardIcon : ''} src={!images ? cardIcon : images} />
        </div>
        
        <div className={style.cardTitle} >
            <Typography variant='h5' gutterBottom sx={{ fontWeight:600 }} >{clientName || '98% Success Rate'}</Typography>
            {
              clientName && ( <Typography variant='body2' gutterBottom >Ceo of Hunt</Typography> )
            }
            <Typography variant='subtitle2' className={style.subtitle2} gutterBottom>Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer.</Typography>
        </div>
        {
            !clientName && (<button className={style.customButton} >Read More</button>) 
        }
        
    </div>
  )
}
