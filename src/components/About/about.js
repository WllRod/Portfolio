import React, { useRef, useEffect, useState } from 'react'
import Card from '../Card/card'
import * as styles from '../../styles/componentsStyles/about'
import Button from '../Assets/button'
import ProgressBar from '../Assets/progressBar'
import { AnimationHooks } from '../animationHooks/animationHook'
import Perfil from '../../assets/perfil.png'

const About = React.forwardRef(( props, ref) => {
    const aboutRef          = ref  
    const imgRef            = useRef( null )
    const testeRef          = useRef( null )
    const [ img, setImg]    = useState( null )
    const animation         = AnimationHooks( props )

    useEffect(() => {
        if( testeRef ){
            setImg( testeRef.current )
        }
    }, [ testeRef ])
    
    const Arrow = ( imgRef ) => {
        const [ width, setWidth]    = useState( window.innerWidth )

        useEffect(() => {
            const updateWidth = ( ) => {
                setWidth( window.innerWidth )
            }
            window.addEventListener('resize', updateWidth)

            return () => {
                window.removeEventListener('resize', updateWidth )
            }
        }, [ width ])
        if( imgRef.imgRef.current ){

            var ref = imgRef.imgRef.current
            var bounding    = ref.getBoundingClientRect()
            var left = width <= 767 ? bounding.x+5 : bounding.x + bounding.width
            
            return <styles.Arrow left={ left }/>
        }
        return null
    } 

    return(
        <Card title={"Sobre Mim"}  id={ props.id } ref={aboutRef} animation={ props.animation || animation }>
           
            <styles.CardContent>
                <styles.ImgContainer >
                   <styles.IMG image={Perfil} ref={ imgRef }></styles.IMG>
                    {/* <img src={Perfil} /> */}
                    {/* <img src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png" style={{height: '125px', width: '125px', marginLeft: '30px'}} ref={imgRef} /> */}
                </styles.ImgContainer>
                <styles.AboutContainer >
                    <Arrow imgRef={ imgRef }/>
                {/* {
                        img === null ? '' :
                        <styles.Arrow 
                            left={ aboutRef.current.offsetLeft - 10 }
                            
                        >
                        </styles.Arrow>
                    } */}
                    <styles.Section showBorder={ false }>
                        <span style={{ width: '100%', height: '100%'}}>
                        Olá, meu nome é William Rodrigues, sou desenvolvedor Full-Stack. Residente de Petrópolis, RJ. Tenho conhecimento avançado na linguagem Python e no framework Flask, e conhecimento intermediário em ReactJS e React Native. E claro, disposto a aprender sempre mais!
                       </span>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <a href="https://cda-teste.s3.amazonaws.com/Curriculo_William.pdf" target="_blank">
                                <Button title={"Download CV"} style={{
                                    fontSize: '0.8rem',
                                    fontWeight: '300'
                                }}/>
                            </a>
                        </div>
                    </styles.Section>
                    <styles.Section  showBorder={ true }>
                        <ProgressBar max={80} startAnimation={props.animation} title={"Python"}/>
                        <ProgressBar max={60} startAnimation={props.animation} title={"React"}/>
                        <ProgressBar max={75} startAnimation={props.animation} title={"ADVPL"}/>
                        <ProgressBar max={75} startAnimation={props.animation} title={"SQL"}/>
                        
                    </styles.Section>
                </styles.AboutContainer>
            </styles.CardContent>
        </Card>
    )
})

export default About