import React, { useEffect, useState, memo } from "react";
import * as styles from '../../styles/componentsStyles/assets/progressBar'

function sleep(ms){
    return new Promise( resolve => setInterval( resolve, ms ))
}

const colors    = [
    "rgb(255, 209, 92)",
    "rgb(220, 53, 69)",
    "rgb(0, 123, 255)",
    "rgb(40, 167, 69)",
    "rgb(40, 167, 69)"
]

const ProgressBar   = ( props ) => {
    const [ width, setWidth ]               = useState(0)
    const [ color, setColor ]               = useState( colors[0] )
    const max       = props.max
    const animation = props.startAnimation
    const title     = props.title
    let timer = null
    // let timer = setInterval(() => { setWidth( width + 1 ); console.log( width ) }, 100)

    // function Increment()
    // {
    //     if( width < max)
    //     {
    //         let tmp = width
            
    //         console.log( width )
    //     }

    //     if( width === max )
    //     {
    //         clearInterval( timer )
    //     }

    // }
    // useEffect(() => {
    //     if( animation ){
            
    //         if( width <= max){
    //             debounce = setTimeout(() => {
    //                 let tmp = width
    //                 tmp++
    //                 setWidth( tmp )
    //             }, 10)
    //         }else{
    //             debounce = clearTimeout(debounce)
    //         }
    //     }
    // }, [ animation, width ])
    function counter(){
        if( width < max )
        {
            setWidth(width+1)
        }
        setInterval(1000)
    }
    useEffect(() => {
        setColor( colors[Math.floor(Math.random()*colors.length)] )
    }, [ ])
    
    // useEffect(() => {
        
    //     const timer = window.setInterval(() => {
    //         if( width < max)
    //         {
    //             console.log(max, width)
    //             setWidth(prevState => prevState + 1)
    //         }
    //     }, 10 )

    //     if( width === max)
    //     {
    //         return () => window.clearInterval( timer )
    //     }
        
    // }, [])

    useEffect(() => {
        if( width < max && props.startAnimation)
        {
            setTimeout(() => setWidth(prevState => prevState + 1), 10 / 60)
        }
    }, [ width, props.startAnimation ])
    
    return(
            
        <styles.PgrBarContainer>
            <styles.Section1>
                <span>{ title }</span>
                { props.mini ? '' : <span>{width}%</span>}
            </styles.Section1>
                <styles.PgrMain>
                    
                    <styles.Bar width={ width } background={color}>
                        A
                      { props.mini ? 
                        <span style={{ marginLeft: '15px', fontSize: '15px', height: 'max-content', color: 'black'}}>{width}%</span>
                      : ''}
                    </styles.Bar>
                </styles.PgrMain>
        </styles.PgrBarContainer>
       
    )
}

export default memo(ProgressBar)