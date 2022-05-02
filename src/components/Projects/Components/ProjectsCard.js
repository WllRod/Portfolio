import React, { useEffect } from 'react'
import Card from '../../Card/card'
import * as s from '../../../styles/componentsStyles/projects'
import { IconButton } from '@material-ui/core'
import { DragHandle } from '@material-ui/icons'

const ProjectsCard  = ( { type, url, title, redirect, github, description } ) => {
    const [ open, setOpen ]             = React.useState( false )
    return(
        <s.ProjectsCard>
            <s.TypeOfProject>
                    {type}
            </s.TypeOfProject>
            <s.ImgDiv url={url} />
            <s.ExpandInformations open={open}>
                <div style={{ display: 'flex', width: '100%', height: 'max-content', justifyContent: 'center'}}>
                    <IconButton onClick={() => setOpen(!open)} style={{ width: 'max-content', height: 'max-content'}}>
                        <DragHandle style={{fontSize: '30px', color: 'white'}}/>
                    </IconButton>
                </div>
                <s.ProjectTitle>{title}</s.ProjectTitle>
                
                {
                    open ? 
                        <s.ExpandContainer open={open}>
                            <s.Description>
                                    {description}
                            </s.Description>
                            <div style={{ background: '#ff4c60', display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0, width: '100%', height: 'max-content', alignItems: 'center', justifyContent: 'center', padding: '10px', borderRadius: '0 0 30px 30px', left:0}}>
                                {github}
                                {redirect}
                            </div>
                        </s.ExpandContainer>
                    : ''
                }
            </s.ExpandInformations>
            
        </s.ProjectsCard>
    )
}

export default ProjectsCard