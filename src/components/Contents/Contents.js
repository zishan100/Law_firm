import React from 'react'
import style from './Contents.module.css'
import { Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';

export default function Contents() {
  return (
    <div className={style.container} >
        <div className={style.titleContainer} >
           <Typography variant='h4' gutterBottom sx={{ fontWeight:500}} >
              You don’t have to 
           </Typography>
           <Typography variant='h4' gutterBottom sx={{ fontWeight:700}} >
              Fight them Alone.
           </Typography>
           <Typography className={style.subtitle} variant='subtitle1' gutterBottom >
           Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae. 
           </Typography>  
           <div className={style.inputContainer} >
              <EmailIcon className={style.emailLogo} />
              <input className={style.input} type='text' placeholder='Enter your email address' /> 
              <button className={style.buttons} >Lets Talk</button>
           </div>
        </div>
        <div className={style.imgContainer} >
            <div className={style.images} ></div>
        </div>

         
    </div>
  )
}
