import React from 'react'
import style from './Navlist.module.css'

export default function Navlist() {
  return (
    <div className={style.container} >
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>    
    </div>
  )
}
