import React from 'react'
import * as styles from '../../styles/componentsStyles/button'

const Button    = ( props ) => {
    return(
        <styles.Button animation={ props.animation } style={ props.style } {...props}>{ props.title }</styles.Button>
    )
}

export default Button