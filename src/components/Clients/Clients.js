import React , { useRef} from 'react'
import style from './Clients.module.css'
import { Typography } from '@mui/material'
import { West , East } from '@mui/icons-material'
import Card from '../Card/Card'
import { clientDetails } from '../Helpers/const'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {
    
    let sliderRef = useRef(null);

    let settings={
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        // nextArrow:false
    }

    const prevs = ()=>{
        sliderRef.slickPrev();
    }

    const nexts = ()=>{
        sliderRef.slickNext();
    }

  return (
    <div className={style.container} >
        <div className={style.headContainer} > 
            <Typography variant='h4' gutterBottom   
                sx = {{ width:'30%' , fontWeight:600 , marginBottom:'4rem'}} 
            >
                What says our happy Clients
            </Typography>
            <div className={style.navBarContainer} >
               <button  
                    className={style.navBtnLeft} 
                    onClick={prevs} 
               > 
                    <West className={style.leftNav} />
                </button>
                <button 
                    className={style.navBtnRight} 
                    onClick={nexts} 
                >
                    <East className={style.rightNav} />  
                </button> 
                
            </div>
        </div>
        <div className={style.clientCard} >
            
            <Slider  
                ref={slider=>{sliderRef=slider}}
               {...settings}
               className={style.slider}
            > 
            {  
                clientDetails.map(({name,imageIcon},idx)=>{
                    return ( <Card 
                                key={idx} 
                                clientName={name} 
                                images={imageIcon}  
                            /> )
                }) 
            }
            </Slider>
        </div>
        
    </div>
  )
}
