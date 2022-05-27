import React, { DetailedHTMLProps, DetailedReactHTMLElement, HTMLAttributes, useEffect, useMemo, useState } from 'react'
import * as styles from '../../styles/componentsStyles/introStyles'
import Button from '../Assets/button'
import '../../app.css'
import { GitHub, LinkedIn, WhatsApp } from '@material-ui/icons'
import Perfil from '../../assets/perfil.png'

function sleep(ms){
    return new Promise( resolve => setTimeout( resolve, ms ))
}

interface Props{
    
    animation?: boolean,
    contactRef?: React.RefObject<any>,
    id?: string
}

interface IntroPropsDiv extends React.HTMLAttributes<HTMLDivElement>
{
    
}

const TypeWritterAnimation = React.memo(() => {
    const [ fraseAtual, setFraseAtual ] = React.useState('')
    const [ index, setIndex ]           = React.useState( 0 )
    const [ timer, setTimer ]           = React.useState( null )
    const [ increment, setIncrement ]         = React.useState( true )
    const [ decrement, setDecrement ]         = React.useState( false )
    const frases    = [
        "Desenvolvedor Python",
        "Desenvolvedor React",
        "Desenvolvedor ADVPL",
    ]

    React.useEffect(() => {
        if( increment )
        {
            let i = 0
            setTimer(setInterval(() => {

                let sum = i++

                if( sum === frases[index].length ) clearInterval( timer )
                
                setFraseAtual( frases[index].substring(0, sum ))
            }, 100))
        }

    }, [ increment ])

    React.useEffect(() => {
        if( decrement )
        {
            let i = fraseAtual.length

            setTimer(setInterval(() => {

                let sum = i--

                setFraseAtual( frases[index].substring(0, sum ))
            }, 100))

        }
    }, [ decrement ])
    React.useEffect(() => {
        
        if( increment )
        {
            if( frases[index].length === fraseAtual.length )
            {
                clearInterval( timer )
                setTimeout(() => {
                    setIncrement( false )
                    setDecrement( true )
                }, 2000)
            }
        }
        else if( decrement)
        {
            if( fraseAtual.length === 0)
            {
                let i = index + 1

                if( frases[i] !== undefined )
                {
                    setIndex( i )
                }
                else
                {
                    setIndex( 0 )
                }
                clearInterval( timer )
                setTimeout(() => {
                    setIncrement( true )
                    setDecrement( false )
                }, 2000)
            }

        }
    }, [ fraseAtual ])
    return(
        <styles.typewriterH2>
            {fraseAtual}
            <span className='blinker' style={{ marginLeft: '5px'}}>|</span>
        </styles.typewriterH2>
    )
})
const ExternalLinks = React.memo(() => {
    const hrefs = [
        <a href="https://github.com/WllRod" target={"_blank"}>
            <GitHub style={{ fontSize: '30px'}} id="External_Icons"/>
        </a>,
        <a href="https://www.linkedin.com/in/william-rodrigues-687581233" target={"_blank"}>
            <LinkedIn style={{ fontSize: '30px'}} id="External_Icons"/>
        </a>,
        <a href="https://api.whatsapp.com/send?phone=+5524993312025&text=Olá, William!" target={"_blank"}>
            <WhatsApp style={{ fontSize: '30px'}} id="External_Icons"/>
        </a>

    ]

    return(
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  width: '125px'}}>
            {
                hrefs.map(( el, i ) => {
                    return(
                        <styles.ExternaLink key={i} id="External_Icons">
                            {el}
                        </styles.ExternaLink>
                    )
            })}
        </div>
        
    )
})

const IntroContainer = React.forwardRef<HTMLDivElement, IntroPropsDiv>((props, ref) => {
    return(
        <styles.IntroContainer {...props} ref={ref}>
            {props.children}
        </styles.IntroContainer>
    )
})


const Intro = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const animation = props.animation
    
    const scrollToContactSection    = ( ) => {
        props.contactRef.current.scrollIntoView()
    }

    return(
        <IntroContainer id={props.id} ref={ref}>
            <img src={Perfil} style={{ height: '100px', width: '100px',borderRadius: '50%'}}/>

            <styles.NameStyle>William Rodrigues</styles.NameStyle>

            <TypeWritterAnimation />

            <ExternalLinks />

            <Button title={"Entre em contato"} animation={ true } onClick={scrollToContactSection}/>
            
            <styles.ScrollDownCont>
                Deslize para baixo
                <styles.ScrollDown id="scrollDown"/>
            </styles.ScrollDownCont>

        </IntroContainer>
    )
})

export default Intro