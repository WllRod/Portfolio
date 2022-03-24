import React from 'react'
import * as styles from '../../styles/componentsStyles/card'
import Grid from '../Titles/Grid'

const About = React.forwardRef(( props, ref ) => {
    
    return(
        <styles.CardContainer ref={ ref } animation={ props.animation } id={props.id}>
            <styles.CardTitle>
                <Grid />
                <styles.CardTitleLabel>{props.title}</styles.CardTitleLabel>
            </styles.CardTitle>
            {props.children}
        </styles.CardContainer>
    )
})

export default About