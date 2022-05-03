import React, { useEffect, useMemo, useState } from 'react'
import * as styles from '../../styles/componentsStyles/introStyles'
import Button from '../Assets/button'
import '../../app.css'
import { GitHub, LinkedIn, WhatsApp } from '@material-ui/icons'
import Perfil from '../../assets/perfil.png'

function sleep(ms){
    return new Promise( resolve => setTimeout( resolve, ms ))
}

const Intro = React.forwardRef(( props, ref ) => {
    const frases    = [
        "Desenvolvedor Python",
        "Desenvolvedor React",
        "Desenvolvedor ADVPL",
    ]
    const animation = props.animation
    const [ fraseC, setFraseC ]             = useState( "" )
    const [ index, setindex ]               = useState( null )
    const loopThrough       = async ( f = null, key ) => {
        var len = f.length+1

        async function inc(){
            for( var i = 0; i < len; i++){
                setFraseC( f.substring(0, i) )
                await sleep( 100 )
            }
        }

        inc()
    }

    const scrollToContactSection    = ( ) => {
        props.contact.current.scrollIntoView()
    }

    useEffect(() => {
        async function espera(){
            if( index === null){
                loopThrough( frases[0] )
                setTimeout(() => setindex( 0 ), 5000)
               
            }else if( index !== null && frases[index+1]){
                var frase   = frases[index+1]
                
                for( var i = fraseC.length; i >= 0; i--){
                    setFraseC( fraseC.substring(0, i))
                    await sleep( 30 )
                }
                loopThrough( frase )
                setTimeout(() => setindex( index+1 ), 5000)
            }else{
                for( var i = fraseC.length; i >= 0; i--){
                    setFraseC( fraseC.substring(0, i))
                    await sleep( 30 )
                }
                setindex( null )
            }
        }
        espera()
        
    }, [ index ] )

    return(
        <styles.IntroContainer id={ props.id } ref={ ref }>
            <img src={Perfil} style={{ height: '100px', width: '100px',borderRadius: '50%'}}/>
            <styles.NameStyle>William Rodrigues</styles.NameStyle>
            { animation ? <styles.typewriterH2>{ fraseC }<span className='blinker' style={{ marginLeft: '5px'}}>|</span></styles.typewriterH2> : ''}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  width: '125px'}}>
                <styles.ExternaLink>
                    
                    <a href="https://github.com/WllRod" target={"_blank"}>
                        <GitHub style={{color: 'white', fontSize: '30px'}}/>
                    </a>
                    
                </styles.ExternaLink>
                <styles.ExternaLink>
                    <a href="https://www.linkedin.com/in/william-rodrigues-687581233" target={"_blank"}>
                        <LinkedIn style={{color: 'white', fontSize: '30px'}}/>
                    </a>
                </styles.ExternaLink>
                <styles.ExternaLink>
                    <a href="https://api.whatsapp.com/send?phone=+5524993312025&text=Olá, William!" target={"_blank"}>
                        <WhatsApp style={{color: 'white', fontSize: '30px'}}/>
                    </a>
                </styles.ExternaLink>
            </div>
            <Button title={"Entre em contato"} animation={ true } onClick={scrollToContactSection}/>
            
            <styles.ScrollDownCont>
                Deslize para baixo
                <styles.ScrollDown />
            </styles.ScrollDownCont>
            
        </styles.IntroContainer>
    )
})

export default Intro