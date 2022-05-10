import React, { useEffect, useState } from 'react'
import * as styles from '../../styles/componentsStyles/menu'
import { Home, Person, School, Work, ChatBubble } from '@material-ui/icons'
import { FaLayerGroup } from 'react-icons/fa'

interface Props {
    active: boolean
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    focus: boolean,
}

const Button: React.FC<ButtonProps> = ({ focus, children, ...props }) => {
    return(
        <styles.Button {...props}>
            {children}
        </styles.Button>
    )
}
const Menu  = React.forwardRef<React.Ref<HTMLDivElement>[], Props>(( props, ref) => {
    
    const [ refs, setRefs ] = useState( null )
    const [ focus, setFocus ]   = useState({})
    const menuOptions   = [
        {
            id: "intro",
            label: "Home",
            icon: <Home />
        },
        {
            id: "about",
            label: "Sobre Mim",
            icon: <Person />
        },
        {
            id: "experience",
            label: "Experiências",
            icon: <Work />
        },
        {
            id: "knowledge",
            label: "Conhecimentos",
            icon: <School />
        },
        {
            id: "project",
            label: "Projetos",
            icon: <FaLayerGroup style={{ fontSize: '20px' }}/>
        },
        {
            id: "contact",
            label: "Contato",
            icon: <ChatBubble />
        }
    ]
    useEffect(() => {
        if( "current" in ref)
        {
            setRefs( ref.current )
            setFocus( Object.assign({}, ...Object.keys( ref.current ).map((x) => ({[x]: false}))) )
        }
        
    }, [ ref ] )

    useEffect(() => {
        setFocus( props.active )
    }, [ props.active ])
   

    const scrollToDiv   = ( id: string ) => {
        refs.forEach(( k, v ) => {
            if( k.current )
            {
                var refId = k.current.id
                if( refId === id ) k.current.scrollIntoView()
            }
        })
        // refs[id].current.scrollIntoView()
        // refs.forEach(( k, v ) => {
        //     var refId  = k.current.id
        //     if( refId === id ) k.current.scrollIntoView()
        // })
    }
    return(
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', alignContent: 'space-between', width: '100%'}}>
            <styles.LogoContainer>
                <styles.Logo>
                    <span>William</span>
                    <styles.Square />
                </styles.Logo>
            </styles.LogoContainer>
            {
                menuOptions.map(( k, v ) => {
                    return(
                        // <styles.Button focus={focus[k.id]} key={k.label}>
                       
                            
                        // </styles.Button>
                        <Button focus={focus[k.id]} key={k.label} onClick={() => scrollToDiv(k.id)}>
                            <section style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd15c'}}>{k.icon}</section>
                            <section style={{ width: '75%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>{k.label}</section>
                        </Button>
                    )
                })
            }
           
        </div>
    )
})

export default Menu