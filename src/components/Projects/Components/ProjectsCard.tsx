import React, { useEffect } from 'react'
import Card from '../../Card/card'
import * as s from '../../../styles/componentsStyles/projects'
import { IconButton } from '@material-ui/core'
import { DragHandle } from '@material-ui/icons'

interface Props{
    type: string,
    url: string,
    title: string,
    description: React.ReactNode,
    github: React.ReactNode,
    redirect: React.ReactNode

}

const ProjectsCard = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const [ open, setOpen ]             = React.useState( false )
    return(
        <s.ProjectsCard ref={ref} {...props}>
            <s.TypeOfProject>
                    {props.type}
            </s.TypeOfProject>
            <s.ImgDiv url={props.url} />
            <s.ExpandInformations open={open}>
                <div style={{ display: 'flex', width: '100%', height: '100px', flexDirection: 'column'}}>
                   
                    <div style={{ width: '100%', height: '10%', alignItems: 'center', justifyContent: 'center',textAlign:'center'}}>
                        <IconButton onClick={() => setOpen(!open)} style={{height: '100%'}}>
                            <DragHandle style={{fontSize: '30px', color: 'white'}}/>
                        </IconButton>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
                        <s.ProjectTitle>{props.title}</s.ProjectTitle>                        
                    </div>
                </div>
                
                
                {
                    open ? 
                        <s.ExpandContainer open={open}>
                            <s.Description>
                                    {props.description}
                            </s.Description>
                            <div style={{ background: '#ff4c60', display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0, width: '100%', height: 'max-content', alignItems: 'center', justifyContent: 'center', padding: '10px', borderRadius: '0 0 30px 30px', left:0}}>
                                {props.github}
                                {props.redirect}
                            </div>
                        </s.ExpandContainer>
                    : ''
                }
            </s.ExpandInformations>
            
        </s.ProjectsCard>
    )
})

export default ProjectsCard