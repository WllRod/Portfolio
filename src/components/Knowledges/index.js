import React, { useState, useEffect, useRef } from 'react'
import Card from '../Card/card'
import * as styles from '../../styles/componentsStyles/experience'
import { AnimationHooks } from '../animationHooks/animationHook'
import { School, Work } from '@material-ui/icons'
import { ObserverHook } from '../ObserverHook/observer'
import { IoLogoPython, IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { RiReactjsFill } from 'react-icons/ri'
import { 
    SiCsharp, 
    SiFlask, 
    SiDotnet, 
    SiMicrosoftsqlserver, 
    SiMysql, 
    SiPostgresql, 
    SiGit, 
    SiGithub, 
    SiAwsamplify, 
    SiAmazonaws, 
    SiVisualstudiocode, 
    SiVisualstudio,
    SiInsomnia,
    SiPostman
} from 'react-icons/si'
import ProgressBar from '../Assets/progressBar'
import { KnowledgeCards, Content } from '../../styles/componentsStyles/knowledgerStyle'

export const Knowledge = React.forwardRef(( props, ref ) => {

    const [ values, setValues ] = React.useState({})
    const refs  = useRef([])
    const observer  = ObserverHook( refs )

    useEffect(() => {
        
        setValues( {
            ...values,
            ...observer
        } )
    }, [ observer ])

    const CardsContainer    = [
        {
            Title: 'Linguagens de Programação',
            SubCards: [
                {
                    Icon: IoLogoPython,
                    Title: 'Python',
                    Width: 80
                },
                {
                    Icon: IoLogoJavascript,
                    Title: 'Javascript',
                    Width: 70
                },
                {
                    Icon: SiCsharp,
                    Title: 'C#',
                    Width: 30
                }
            ]
        },
        {
            Title: 'Front-End',
            SubCards: [
                {
                    Icon: RiReactjsFill,
                    Title: 'ReactJS',
                    Width: 80
                },
                {
                    Icon: IoLogoHtml5,
                    Title: 'HTML',
                    Width: 80
                },
                {
                    Icon: IoLogoCss3,
                    Title: 'CSS',
                    Width: 80
                }
            ]
        },
        {
            Title: 'Back-End',
            SubCards: [
                {
                    Icon: SiFlask,
                    Title: 'Flask',
                    Width: 68
                },
                {
                    Icon: SiDotnet,
                    Title: '.Net Core',
                    Width: 30
                }
            ]
        },
        {
            Title: 'Bancos de Dados',
            SubCards: [
                {
                    Icon: SiMicrosoftsqlserver,
                    Title: 'SQL Server',
                    Width: 85
                },
                {
                    Icon: SiMysql,
                    Title: 'MySQL',
                    Width: 72
                },
                {
                    Icon: SiPostgresql,
                    Title: 'PostgreSQL',
                    Width: 70
                }
            ]
        },
        {
            Title: 'DevOps',
            SubCards: [
                {
                    Icon: SiGit,
                    Title: 'Git',
                    Width: 45
                },
                {
                    Icon: SiGithub,
                    Title: 'Github',
                    Width: 67
                },
                {
                    Icon: SiAwsamplify,
                    Title: 'Amplify',
                    Width: 65
                },
                {
                    Icon: SiAmazonaws,
                    Title: 'AWS',
                    Width: 40
                }
            ]
        },
        {
            Title: 'Editores e utilitários',
            SubCards: [
                {
                    Icon: SiVisualstudiocode,
                    Title: 'VS Code',
                    Width: 85
                },
                {
                    Icon: SiVisualstudio,
                    Title: 'Visual Studio',
                    Width: 64
                },
                {
                    Icon: SiAwsamplify,
                    Title: 'Amplify',
                    Width: 65
                },
                {
                    Icon: SiInsomnia,
                    Title: 'Insomnia',
                    Width: 78
                },
                {
                    Icon: SiPostman,
                    Title: 'Postman',
                    Width: 75
                }
            ]
        }
    ]
    
    const animation = AnimationHooks( props )
    return(
        <Card title={"Conhecimentos"} animation={ props.animation || animation } ref={ ref } id={ props.id }>
            <styles.ExperienceContainer >
                {
                    CardsContainer.map(( v, i ) => {
                        return(
                            <styles.ExperienceContent animation={values[i]} id={i} ref={el => refs.current[i] = el}>
                    <styles.SectionsContainer>
                        <styles.Section animation={true}>
                            <styles.IconDiv>
                                <School style={{ fontSize: '30px', color: '#ff4c60'}}/>
                            </styles.IconDiv>
                            <styles.LocalSpan>{v.Title}</styles.LocalSpan>
                           <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%', gap: '25px', flexWrap: 'wrap'}}>
                               {
                                   v.SubCards.map(( v, s ) => {
                                       return(
                                        <KnowledgeCards>
                                            <Content animation={values[i]}>
                                                <v.Icon style={{
                                                    fontSize: '50px'
                                                }}/>
                                                <span style={{ fontWeight: '500', fontSize: '1rem'}}>{v.Title}</span>
                                                <section style={ { width: '100%', height: 'max-content'}}>
                                                    <ProgressBar max={v.Width} startAnimation={true} mini={true}/>
                                                </section>
                                            </Content>
                                        </KnowledgeCards>
                                       )
                                   })
                               }
                           </div>
                        </styles.Section>
                        
                    </styles.SectionsContainer>
                   
                </styles.ExperienceContent>
                        )
                    })
                }
            </styles.ExperienceContainer>
        </Card>
    )
})

export default Knowledge