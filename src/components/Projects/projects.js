import React, { useEffect } from 'react'
import { AnimationHooks } from '../animationHooks/animationHook'
import Card from '../Card/card'
import * as s from '../../styles/componentsStyles/projects'
import { projectsData } from './projectsData'
import { IconDiv } from '../../styles/componentsStyles/experience'
import { School, Work } from '@material-ui/icons'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { IconButton } from '@material-ui/core'

import { ArrowDownwardOutlined, ArrowUpwardOutlined, DragHandle } from '@material-ui/icons'
import ProjectsCard from './Components/ProjectsCard'

const Technologies  = React.forwardRef(( props, ref) => {
    const [ animation, setAnimation ] = React.useState( false )
    const [ isVisible, setVisible   ]   = React.useState({})
    
    const aaa = React.useRef(null)
    useEffect(() => {
        if( props.animation && !(animation)){
            setAnimation( props.animation )
        }
    }, [ props.animation ])

    return(
        <Card title={"Projetos"}  id={ props.id } ref={ref} animation={ props.animation || animation }>
            <s.ProjectsContainer>
                {
                    projectsData.map(( v, i ) => {
                       return <ProjectsCard
                                title={v.title}
                                description={v.description}
                                github={v.github}
                                redirect={v.redirect}
                                type={v.typeOfProject}
                                url={"https://cda-teste.s3.amazonaws.com/gorilla_project_01.png"}
                            />
                        
                    })
                }
                
            </s.ProjectsContainer>
            
        </Card>
    )
})

export default Technologies