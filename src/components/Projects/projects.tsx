import React, { useEffect } from 'react'
import Card from '../Card/card'
import * as s from '../../styles/componentsStyles/projects'
import { projectsData } from './projectsData'
import { ArrowForwardOutlined, ArrowBackOutlined } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import ProjectsCard from './Components/ProjectsCard'
import { BrowserView, MobileView } from 'react-device-detect'

interface Props{
    id: string,
    animation: boolean
}

const Technologies  = React.forwardRef<HTMLDivElement, Props>(( props, ref) => {
    const [ animation, setAnimation ] = React.useState( false )
    const [ firstElIsVisible, setFirstElIsVisible   ]   = React.useState(false)
    const [ lastElIsIsVisible, setLastElIsIsVisible   ]   = React.useState(false)
    const [ considerPadding, setConsiderPadding ]           = React.useState(false)
    const containerRef  = React.useRef( null )
    const firstRef      = React.useRef( null )
    const lastRef   = React.useRef(null)
    const refs      = React.useRef([ firstRef, lastRef ])
    const [ touchCoordinates, setTouchCoordinates ] = React.useState(
        {
            x: 0
        }
    )

    const callbackObserver = ((entries) => {
        const [entry] = entries
        
        let id = entry.target.id

        if( entry.isIntersecting )
        {
            if( id === "firstRef")
            {
                setFirstElIsVisible(true)
                if( !lastElIsIsVisible ) setLastElIsIsVisible(false)

            }
            else if( id === "lastRef")
            {
                setFirstElIsVisible(false)
                // setLastElIsIsVisible(true)

            }
        }
    })

    const options = {
        root: null,
        rootMargin: '10px',
        threshold: 0.99
    }

    useEffect(() => {
        if( props.animation && !(animation)){
            setAnimation( props.animation )
        }
    }, [ props.animation ])

    useEffect(() => {
        refs.current.forEach((r, i) => {
            const observer = new IntersectionObserver(callbackObserver, options)
            if( r.current )
            {
                observer.observe( r.current )
            }
        })
    })

    const onClickNext = () => {

        if( containerRef.current && firstRef.current )
        {
            var elBounding = firstRef.current.getBoundingClientRect()
            let scrollTo    = elBounding.width
            if( !considerPadding ) 
            {
                scrollTo = scrollTo + 150
                setConsiderPadding( true )
            }
            containerRef.current.scrollLeft += scrollTo
        }
    }

    const onClickBack = () => {

        if( containerRef.current && firstRef.current )
        {
            var elBounding = firstRef.current.getBoundingClientRect()
            let scrollTo    = elBounding.width
            
           
            containerRef.current.scrollLeft -= scrollTo - 150
        }
    }

    const NextButton = ( ) => {

        if(firstElIsVisible && !lastElIsIsVisible)
        {
            return(
                <IconButton style={{ position: 'fixed', right: '40px', zIndex: '5000', top: '50%', background: '#ff4c60' }} onClick={onClickNext}>
                    <ArrowForwardOutlined style={{color: 'white'}}/>
                </IconButton>
            )
        }

        return null
    }

    const PrevButton = ( ) => {
        if(!firstElIsVisible)
        {
            return(
                <IconButton style={{ position: 'fixed', left: '100px', zIndex: '5000', top: '50%', background: '#ff4c60' }} onClick={onClickBack}>
                    <ArrowBackOutlined style={{color: 'white'}}/>
                </IconButton>
            )
        }

        return null
    }

    const onTouchMove = ( e ) => {
        let x   = e.targetTouches["0"].pageX
        let el  = firstRef.current.getBoundingClientRect()
        let computedStyles  = window.getComputedStyle(containerRef.current)
        let gap = parseInt( computedStyles.getPropertyValue('gap') )
        let paddingLeft = parseInt( computedStyles.getPropertyValue('padding-left') )
        let scrollTo    = el.width+gap+paddingLeft
        
        if( x < touchCoordinates.x)
        {
            containerRef.current.scrollLeft += scrollTo
        }
        else if( x > touchCoordinates.x)
        {
            containerRef.current.scrollLeft -= scrollTo
        }

        setTouchCoordinates(
            {
                x: x
            }
        )
    }
    return(
        <Card title={"Projetos"}  id={ props.id } ref={ref} animation={ props.animation || animation }>
            <s.ProjectsContainer ref={containerRef} onTouchMove={e => onTouchMove(e)}>
                <BrowserView>
                    <NextButton />
                    <PrevButton />
                    {/* <NextButton />
                    <PrevButton /> */}
                </BrowserView>
                {
                    projectsData.map(( v, i ) => {
                        let components = <ProjectsCard
                        title={v.title}
                        description={v.description}
                        github={v.github}
                        redirect={v.redirect}
                        type={v.typeOfProject}
                        url={v.url}
                        
                    />
                    if( i === 0)
                    {
                        return(
                            React.cloneElement(components, {
                                ref: ( ref ) => firstRef.current = ref,
                                id: "firstRef"
                            })
                        )   
                    }
                    if( i === projectsData.length - 1){
                        return(
                            React.cloneElement(components, {
                                ref: ( ref ) => lastRef.current = ref,
                                id: "lastRef"
                            })
                        )    
                    }
                    return(
                        React.cloneElement(components)
                    )
                        
                    })
                }
               
            </s.ProjectsContainer>
                <MobileView style={{ width: '100%', height: 'max-content'}}>
                    <div style={{ fontSize: '15px', color: 'white',  width: '100%', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
                        Deslize para o lado
                        <s.ScrollLeft />
                    </div>
                </MobileView>
            
        </Card>
    )

    
})

export default Technologies