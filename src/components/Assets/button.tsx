import React from 'react'
import * as styles from '../../styles/componentsStyles/button'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>
{
    animation?: boolean,
    title?: string
}

const Button: React.FC<ButtonProps> = ({animation, title, ...props}) => {
    return(
        <styles.Button {...props}>{title}</styles.Button>
    )
}


export default Button