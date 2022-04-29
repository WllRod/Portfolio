import React, { useState, useEffect, useRef } from 'react'
import Card from '../Card/card'
import * as styles from '../../styles/componentsStyles/experience'
import { AnimationHooks } from '../animationHooks/animationHook'
import { School, Work } from '@material-ui/icons'
import { ObserverHook } from '../ObserverHook/observer'

export const Experience = React.forwardRef(( props, ref ) => {

    const section1Ref   = useRef( null )
    const section2Ref   = useRef( null )
    const section3Ref   = useRef( null )
    const section4Ref   = useRef( null )

    const refs          = useRef([])
    const observer  = ObserverHook( refs )
    const [ values, setValues ] = React.useState({})
    
    useEffect(() => {
        setValues( prevState => ({
            ...prevState,
            ...observer
        }))
        
    }, [ observer ])


    const animation = AnimationHooks( props )
    return(
        <Card title={"Experiências"} animation={ props.animation || animation } ref={ ref } id={ props.id }>
            <styles.ExperienceContainer >
                <styles.ExperienceContent>
                    <styles.SectionsContainer>
                        <styles.Section id={ "FAETERJ" } ref={ el => refs.current.push(el) } animation={values.FAETERJ}>
                            <styles.IconDiv>
                                <School style={{ fontSize: '30px', color: '#ff4c60'}}/>
                            </styles.IconDiv>
                            <styles.TimeSpan>2019 - Atualmente</styles.TimeSpan>
                            <styles.LocalSpan>FAETERJ - Petrópolis</styles.LocalSpan>
                            <styles.DescSpan>Educação Superior em Tecnologia da Informação, cursando o 4º período.</styles.DescSpan>
                        </styles.Section>
                        <styles.Section id={ "FAETEC" } ref={ el => refs.current.push(el) } animation={values.FAETEC}>
                            <styles.IconDiv>
                                <School style={{ fontSize: '30px', color: '#ff4c60'}}/>
                            </styles.IconDiv>
                            <styles.TimeSpan>2015 - 2018</styles.TimeSpan>
                            <styles.LocalSpan>FAETEC - Petrópolis</styles.LocalSpan>
                            <styles.DescSpan>Educação técnica em tecnologia da informação.</styles.DescSpan>
                        </styles.Section>
                        
                    </styles.SectionsContainer>
                   
                </styles.ExperienceContent>
                <styles.ExperienceContent>
                    <styles.SectionsContainer>
                        <styles.Section id={ "CDA" } ref={ el => refs.current.push(el) } animation={values.CDA}>
                            <styles.IconDiv>
                                <Work style={{ fontSize: '30px', color: '#ff4c60'}}/>
                            </styles.IconDiv>
                            <styles.TimeSpan>2020 - Atualmente</styles.TimeSpan>
                            <styles.LocalSpan>Casa do Alemão Industria e Comércio de Alimentos LTDA</styles.LocalSpan>
                            <styles.DescSpan>Função: Monitorador de Sistemas</styles.DescSpan>
                            <styles.DescSpan>
                                Desc. Do Cargo: Suporte ao cliente interno, desenvolvimento de softwares para uso na empresa,
                                desenvolvimento de rotinas e Pontos de Entrada para o ERP Protheus e análise de dados via SQL.
                            </styles.DescSpan>
                        </styles.Section>
                        
                        <styles.Section id={ "MAC" } ref={ el => refs.current.push(el) } animation={values.MAC}>
                            <styles.IconDiv>
                                <Work style={{ fontSize: '30px', color: '#ff4c60'}}/>
                            </styles.IconDiv>
                            <styles.TimeSpan>2018 - 2019</styles.TimeSpan>
                            <styles.LocalSpan>Mac Amis Informatica LTDA</styles.LocalSpan>
                            <styles.DescSpan>Função: Técnico em informática</styles.DescSpan>
                            <styles.DescSpan>
                                Desc. Do Cargo: Receber ligações de assinantes dos serviços da Tech Cable e RCA,
                                auxiliando-os nos reparos e nas configurações de equipamentos relacionados a redes de
                                internet e televisão. Elaborar e preencher relatórios no Word e Excel referentes ao
                                atendimento.
                            </styles.DescSpan>
                        </styles.Section>
                        
                    </styles.SectionsContainer>
                   
                </styles.ExperienceContent>
                
            </styles.ExperienceContainer>
        </Card>
    )
})

export default Experience