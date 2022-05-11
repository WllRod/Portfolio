import React, { useState, useEffect, useRef } from 'react'
import Card from '../Card/card'
import * as styles from '../../styles/componentsStyles/experience'
import { AnimationHooks } from '../animationHooks/animationHook'
import { School, Work } from '@material-ui/icons'
import { ObserverHook } from '../ObserverHook/observer'

interface Props{
    id: string,
    animation: boolean
}
export const Experience = React.forwardRef<HTMLDivElement, Props>(( props, ref ) => {
    const refs  = useRef([])
    const observer  = ObserverHook( refs )
    const [ values, setValues ] = React.useState({})

    useEffect(() => {
        setValues( prevState => ({
            ...prevState,
            ...observer
        }))
        
    }, [ observer ])

    const Experiencias = [
        [
            {
                id: "FAETERJ",
                tempo: "2019 - Atualmente",
                local: "FAETERJ - Petrópolis",
                descricao: "Educação Superior em Tecnologia da Informação, cursando o 4º período.",
                funcao: null,
                icon: School
            },
            {
                id: "FAETEC",
                tempo: "2015 - 2018",
                local: "FAETEC - Petrópolis",
                descricao: "Educação técnica em tecnologia da informação.",
                funcao: null,
                icon: School
            }
        ],
        [
            {
                id: "CDA",
                tempo: "2020 - Atualmente",
                local: "Casa do Alemão Industria e Comércio de Alimentos LTDA",
                funcao: "Função: Monitorador de Sistemas",
                descricao: "Desc. Do Cargo: Suporte ao cliente interno, desenvolvimento de softwares para uso na empresa, desenvolvimento de rotinas e Pontos de Entrada para o ERP Protheus e análise de dados via SQL.",
                icon: Work
    
            },
            {
                id: "MAC",
                tempo: "2018 - 2019",
                local: "Mac Amis Informatica LTDA",
                funcao: "Função: Técnico em informática",
                descricao: "Desc. Do Cargo: Receber ligações de assinantes dos serviços da Tech Cable e RCA, auxiliando-os nos reparos e nas configurações de equipamentos relacionados a redes de internet e televisão. Elaborar e preencher relatórios no Word e Excel referentes ao atendimento.",
                icon: Work
    
            }
        ]
    ]
    return(
        <Card title={"Experiências"} animation={ props.animation } ref={ ref } id={ props.id }>
            <styles.ExperienceContainer >
                {
                    Experiencias.map(( valores, i ) => {
                        return(
                            <styles.ExperienceContent key={i}>
                                <styles.SectionsContainer>
                                    {
                                        valores.map(( v, index ) => {
                                            return(
                                                <styles.Section id={ v.id } ref={ el => refs.current.push(el) } animation={values[v.id]} key={index}>
                                                    <styles.IconDiv>
                                                        <v.icon style={{ fontSize: '30px', color: '#ff4c60'}}/>
                                                    </styles.IconDiv>
                                                    <styles.TimeSpan>{v.tempo}</styles.TimeSpan>
                                                    <styles.LocalSpan>{v.local}</styles.LocalSpan>
                                                    <styles.DescSpan>{v.funcao}</styles.DescSpan>
                                                    <styles.DescSpan>{v.descricao}</styles.DescSpan>
                                                </styles.Section>
                                            )
                                        })
                                    }
                                </styles.SectionsContainer>
                            </styles.ExperienceContent>
                        )
                    })
                }
                
            </styles.ExperienceContainer>
    </Card>
    )

    // const refs          = useRef([])
    // const observer  = ObserverHook( refs )
    // const [ values, setValues ] = React.useState({})
    
    


    // const animation = AnimationHooks( props )
    // return(
    
    // )
})

export default Experience