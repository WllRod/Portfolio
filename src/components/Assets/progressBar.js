import React, { useEffect, useState } from "react";
import * as styles from '../../styles/componentsStyles/assets/progressBar'

function sleep(ms){
    return new Promise( resolve => setTimeout( resolve, ms ))
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
    
    async function espera2(){
            
        for( var i = width; i <= max; i++){
            setWidth( i )
            await sleep( 5 )
        }
    }

    useEffect(() => {
        if( animation ){
            espera2()
        }
    }, [ animation ])

    useEffect(() => {
        setColor( colors[Math.floor(Math.random()*colors.length)] )
    }, [])
    
    return(
            
        <styles.PgrBarContainer>
            <styles.Section1>
                <span>{ title }</span>
                { props.mini ? '' : <span>{width}%</span>}
            </styles.Section1>
                <styles.PgrMain>
                    
                    <styles.Bar width={ width } background={color}>
                      { props.mini ? 
                        <span style={{ marginLeft: '15px', fontSize: '15px', height: 'max-content', color: 'black'}}>{width}%</span>
                      : ''}
                    </styles.Bar>
                </styles.PgrMain>
        </styles.PgrBarContainer>
       
    )
}

export default ProgressBar