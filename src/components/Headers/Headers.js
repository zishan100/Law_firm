import React from 'react'
import style from './Headers.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Navlist from '../Navlist/Navlist';
import Contents from '../Contents/Contents';

export default function Headers() {
  return (
    <div className={style.containers} >
        <nav className={style.navbar} >
           <Logo />
           <Navlist />
           <Button /> 
        </nav>
        <Contents />
    </div>
  )
}
