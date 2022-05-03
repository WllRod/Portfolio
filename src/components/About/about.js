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
    let abilities           = [
        {
            name: "Python",
            max: 80            
        },
        {
            name: "React",
            max: 60
        },
        {
            name: "ADVPL",
            max: 75
        },
        {
            name: "SQL",
            max: 75
        }
    ]
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
            var left = width <= 767 ? bounding.x-5 : bounding.x 
            
            return <styles.Arrow left={ left }/>
        }
        return null
    } 

    return(
        <Card title={"Sobre Mim"} id={ props.id } ref={aboutRef} animation={ props.animation || animation }>
           
            <styles.CardContent>
                <styles.ImgContainer >
                   <styles.IMG image={Perfil} ref={ imgRef }></styles.IMG>
                </styles.ImgContainer>
                <styles.AboutContainer >
                    <Arrow imgRef={ imgRef }/>
              
                    <styles.Section showBorder={ false }>
                        <span style={{ width: '100%', height: '100%'}}>
                        Olá, meu nome é William Rodrigues, sou desenvolvedor Full-Stack. Residente de Petrópolis, RJ. Tenho conhecimento avançado na linguagem Python e no framework Flask, e conhecimento intermediário em ReactJS e React Native. E claro, disposto a aprender sempre mais!
                       </span>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <a href={process.env.REACT_APP_CV_PATH} target="_blank">
                                <Button title={"Download CV"} style={{
                                    fontSize: '0.8rem',
                                    fontWeight: '300'
                                }}/>
                            </a>
                        </div>
                    </styles.Section>
                    <styles.Section  showBorder={ true }>
                        <section style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', paddingLeft: '20px', paddingTop: '10px'}}>
                           
                            {
                                abilities.map(( v, i ) => {
                                    return <ProgressBar max={v.max} startAnimation={animation} title={v.name} key={i}/> 
                                })
                            }
                        </section>
                        
                    </styles.Section>
                </styles.AboutContainer>
            </styles.CardContent>
        </Card>
    )
})

export default About