import React, { useEffect, useState } from 'react'
import * as styles from '../../styles/componentsStyles/menu'
import { Home, Person, School, Work, ChatBubble } from '@material-ui/icons'

const Menu  = React.forwardRef(( props, ref) => {
    
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
            icon: <School />
        },
        {
            id: "contact",
            label: "Contato",
            icon: <ChatBubble />
        }
    ]
    useEffect(() => {
        setRefs( ref.current )
        setFocus( Object.assign({}, ...Object.keys( ref.current ).map((x) => ({[x]: false}))) )
        
    }, [ ref ] )

    useEffect(() => {
        setFocus( props.active )
    }, [ props.active ])
    // const callbackFunction = ( entries )    => {
    //     const [ entry ] = entries

    //     if( entry.isIntersecting ){
    //         var id  = entry.target.id
            
    //         var tmp = {
    //             ...focus,
    //             [id]: true
    //         }
    //         setFocus( tmp )
    //     }
    // }
    
    // const options   = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: window.innerWidth <= 767 ? 0.3 : 0.3
    // }


    // useEffect(() => {
    //     // if(window.performance){
    //     //     if( performance.navigation.type === 1){
    //     //         introRef.current.scrollIntoView()
    //     //     }
    //     // }
    //     const observer  = new IntersectionObserver( callbackFunction, options )
    //     ref.current.forEach(( k ) => {
    //         if( k.current ) observer.observe( k.current )
    //     })

    //     return () => {
    //         ref.current.forEach(( k ) => {
    //             if( k.current ) observer.unobserve( k.current )
    //         })
    //     }
    // }, [ ] )
    // const scrollHandler = ( )   => {
    //     console.log( focus )
    //     if( refs !== null ){
    //         const t = Object.keys( refs ).map(( k, v ) => {
    //             if( refs[k].current !== null ){
                    
    //                 var bounding    = refs[k].current.getBoundingClientRect()
    //                     if( bounding.top >= 0 && bounding.bottom <= window.innerHeight){
    //                         var id  = refs[k].current.id
    //                         var tmpFocus    = { ...focus }
    //                         Object.keys( tmpFocus ).map(( k, v ) => {
    //                             if( k !== id ){
    //                                 tmpFocus[k] = false
    //                             }
    //                         })
    //                         tmpFocus[id]    = true
    //                         setFocus( tmpFocus )
    //                         // setFocus( tmpFocus )
    //                         // setFocus( {
    //                         //     ...tmpFocus
    //                         // } )
    //                     }
    //             }else{
    //                 var tmpFocus    = { ...focus }
    //                 Object.keys( tmpFocus ).map(( k, v ) => {
    //                           tmpFocus[k]   = false  
    //                 })
    //                 setFocus( tmpFocus )
    //             }
                
                
    //         })
    
    //         return t
            
    //     }
        
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', scrollHandler)

    //     return () => window.removeEventListener('scroll', scrollHandler)
    // }, [ scrollHandler ])

    const scrollToDiv   = ( id ) => {
        // refs[id].current.scrollIntoView()
        refs.forEach(( k, v ) => {
            var refId  = k.current.id
            if( refId === id ) k.current.scrollIntoView()
        })
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
                        <styles.Button onClick={ () => scrollToDiv(k.id)} focus={focus[k.id]}>
                            <section style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd15c'}}>{k.icon}</section>
                            <section style={{ width: '75%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>{k.label}</section>
                        </styles.Button>
                    )
                })
            }
            {/* <styles.Button onClick={ () => scrollToDiv("intro")} focus={focus.intro}>
               <section style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd15c'}}><Home /></section>
               <section style={{ width: '75%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>Home</section>
            </styles.Button>
            <styles.Button onClick={ () => scrollToDiv("about")} focus={focus.about}>
               <section style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd15c'}}><Person /></section>
               <section style={{ width: '75%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>Sobre</section>
            </styles.Button>
            <styles.Button onClick={ () => scrollToDiv("experience")} focus={focus.experience}>
               <section style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd15c'}}><School /></section>
               <section style={{ width: '75%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>Experiências</section>
            </styles.Button>
            <styles.Button onClick={ () => scrollToDiv("contact")} focus={focus.contact}>
               <section style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd15c'}}><ChatBubble /></section>
               <section style={{ width: '75%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>Contato</section>
            </styles.Button> */}
            {/* <styles.Button onClick={ () => scrollToDiv("projects")} focus={focus.projects}>
               <section style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd15c'}}><Work /></section>
               <section style={{ width: '75%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>Projetos</section>
            </styles.Button> */}
            
        </div>
    )
})

export default Menu