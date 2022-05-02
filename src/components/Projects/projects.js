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

const Technologies  = React.forwardRef(( props, ref) => {
    const [ animation, setAnimation ] = React.useState( false )
    const [ isVisible, setVisible   ]   = React.useState({})
    const [ open, setOpen ]             = React.useState( false )
    const aaa = React.useRef(null)
    useEffect(() => {
        if( props.animation && !(animation)){
            setAnimation( props.animation )
        }
    }, [ props.animation ])


    const HoverContent = ({ github, redirect, type, title, description }) => {
        return(
            <>
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: 'max-content', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ background: '#ff4c60', width: '100%',  display: 'flex', flexDirection: 'column', padding: '15px', borderRadius: '0 30px 30px 0', gap: '10px', zIndex:'2'}}>
                        
                        {github}
                        {redirect}
                        
                    </div>
                </div>
                <s.TypeOfProject>
                    {type}
                </s.TypeOfProject>

                <div style={{ position: 'absolute', height: '100%', right: 0, width: '90%',  top: '-14px', borderRadius: '0 30px 30px 0', padding: '20px'}}>
                    
                    <br />
                    <s.Description>
                        {description}
                    </s.Description>
                </div>
            </>
        )
    }

    
    return(
        <Card title={"Projetos"}  id={ props.id } ref={ref} animation={ props.animation || animation }>
            <s.ProjectsContainer>
                {
                    projectsData.map(( v, i ) => {
                        return(
                            <s.ProjectsCard>
                                <s.TypeOfProject>
                                        {v.typeOfProject}
                                </s.TypeOfProject>
                                <s.ImgDiv url={"https://cda-teste.s3.amazonaws.com/gorilla_project_01.png"} />
                                <s.ExpandInformations open={open} ref={aaa}>
                                    <div style={{ display: 'flex', width: '100%', height: 'max-content', justifyContent: 'center'}}>
                                        <IconButton onClick={() => setOpen(!open)} style={{ width: 'max-content', height: 'max-content'}}>
                                            <DragHandle style={{fontSize: '30px', color: 'white'}}/>
                                        </IconButton>
                                    </div>
                                    <s.ProjectTitle>{v.title}</s.ProjectTitle>
                                    
                                    {
                                        open ? 
                                            <s.ExpandContainer open={open}>
                            
                                                

                                                <s.Description>
                                                        {v.description}
                                                </s.Description>
                                                <div style={{ background: '#ff4c60', display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0, width: '100%', height: 'max-content', alignItems: 'center', justifyContent: 'center', padding: '10px', borderRadius: '0 0 30px 30px', left:0}}>
                                                    {v.github}
                                                    {v.redirect}
                                                </div>
                                            </s.ExpandContainer>
                                        : ''
                                    }
                                </s.ExpandInformations>
                                
                            </s.ProjectsCard>
                        )
                    })
                }
                
            </s.ProjectsContainer>
            
        </Card>
    )
})

export default Technologies