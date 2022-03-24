import React, { useEffect } from 'react'
import { AnimationHooks } from '../animationHooks/animationHook'
import Card from '../Card/card'
import Project01 from '../../assets/gorilla_project_01.png'
import * as styles from '../../styles/componentsStyles/projects'

const Technologies  = React.forwardRef(( props, ref) => {
    const [ animation, setAnimation ] = React.useState( false )
    const [ isVisible, setVisible   ]   = React.useState( false )
    useEffect(() => {
        if( props.animation && !(animation)){
            setAnimation( props.animation )
        }
    }, [ props.animation ])

    return(
        <Card title={"Projetos"}  id={ props.id } ref={ref} animation={ props.animation || animation }>
            <styles.ProjectsContainer>
                <styles.ProjectsCard 
                    url={"https://cda-teste.s3.amazonaws.com/gorilla_project_01.png"}
                    onMouseEnter={() => setVisible( true )}
                    onMouseLeave={() => setVisible( false )}
                    
                >
                    <styles.Hover visible={ isVisible }>
                        <styles.HoverContent visible={ isVisible }>
                            <span>TESTE</span>
                        </styles.HoverContent>
                    </styles.Hover>
                </styles.ProjectsCard>
            </styles.ProjectsContainer>
        </Card>
    )
})

export default Technologies