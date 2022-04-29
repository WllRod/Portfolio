import React, { useEffect } from 'react'
import { AnimationHooks } from '../animationHooks/animationHook'
import Card from '../Card/card'
import * as styles from '../../styles/componentsStyles/projects'
import { projectsData } from './projectsData'

const Technologies  = React.forwardRef(( props, ref) => {
    const [ animation, setAnimation ] = React.useState( false )
    const [ isVisible, setVisible   ]   = React.useState({})
    useEffect(() => {
        if( props.animation && !(animation)){
            setAnimation( props.animation )
        }
    }, [ props.animation ])


    const HoverContent = ({ github, redirect, type, title, description }) => {
        return(
            <styles.HoverContainer>
                <styles.Hover visible={isVisible} />
                    
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: 'max-content', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ background: '#ff4c60', width: '100%',  display: 'flex', flexDirection: 'column', padding: '15px', borderRadius: '0 30px 30px 0', gap: '10px'}}>
                        
                        {github}
                        {redirect}
                        
                    </div>
                </div>
                <styles.TypeOfProject>
                    {type}
                </styles.TypeOfProject>

                <div style={{ position: 'absolute', height: '100%', right: 0, width: '90%',  top: '-14px', borderRadius: '0 30px 30px 0', padding: '20px'}}>
                    <h1>{title}</h1>
                    <br />
                    <span style={{ letterSpacing: '1.5px', fontSize: '1em'}}>
                        {description}
                    </span>
                </div>
            </styles.HoverContainer>
        )
    }
    return(
        <Card title={"Projetos"}  id={ props.id } ref={ref} animation={ props.animation || animation }>
            <styles.ProjectsContainer>
                {
                    projectsData.map(( v, i ) => {
                        return(
                            <styles.ProjectsCardContainer>
                                <styles.ProjectsCard 
                                    url={"https://cda-teste.s3.amazonaws.com/gorilla_project_01.png"}
                                    onMouseEnter={() => setVisible( prevState => ({ ...prevState, [v.id]: true}) )}
                                    onMouseLeave={() => setVisible( prevState => ({ ...prevState, [v.id]: false}) )}
                                    onClick={() => setVisible( prevState => ({ ...prevState, [v.id]: !isVisible[v.id]}))}
                                    id={v.id}
                                >
                                    { isVisible[v.id] ?   <HoverContent 
                                                        redirect={v.redirect} 
                                                        github={v.github}
                                                        type={v.typeOfProject}
                                                        title={v.title}
                                                        description={v.description}
                                                    /> 
                                                : null }
                                    
                                </styles.ProjectsCard>
                                <styles.ProjectTitle>{v.title}</styles.ProjectTitle>
                            </styles.ProjectsCardContainer>
                        )
                    })
                }
                
            </styles.ProjectsContainer>
            
        </Card>
    )
})

export default Technologies