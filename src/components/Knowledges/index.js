import React, { useState, useEffect, useRef } from 'react'
import Card from '../Card/card'
import * as styles from '../../styles/componentsStyles/experience'
import { AnimationHooks } from '../animationHooks/animationHook'
import { School, Work } from '@material-ui/icons'
import { ObserverHook } from '../ObserverHook/observer'
import ProgressBar from '../Assets/progressBar'
import { KnowledgeCards, Content, SubCardsContainer } from '../../styles/componentsStyles/knowledgerStyle'
import { Data } from './Data'

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

    const animation = AnimationHooks( props )
    return(
        <Card title={"Conhecimentos"} animation={ props.animation || animation } ref={ ref } id={ props.id }>
            <styles.ExperienceContainer >
                {
                    Data.map(( v, i ) => {
                        return(
                            <styles.ExperienceContent animation={values[i]} ref={el => refs.current[i] = el} id={i} intersection={true}>
                    <styles.SectionsContainer>
                        <styles.Section animation={true}>
                            <styles.IconDiv>
                                <School style={{ fontSize: '30px', color: '#ff4c60'}}/>
                            </styles.IconDiv>
                            <styles.LocalSpan>{v.Title}</styles.LocalSpan>
                           <SubCardsContainer>
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
                                                    <ProgressBar max={v.Width} startAnimation={values[s]} mini={true}/>
                                                </section>
                                            </Content>
                                        </KnowledgeCards>
                                       )
                                   })
                               }
                           </SubCardsContainer>
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