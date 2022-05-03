import React, { useEffect, useRef, useState } from 'react'
import './app.css'
import GlobalStyle from './styles/global'
import * as styles from './styles/appStyles'
import Intro from './components/Intro/intro'
import About from './components/About/about'
import Experience from './components/Experience/experience'
import Menu from './components/Menu/menu'
import { Divide as Hamburger } from 'hamburger-react'
import { ObserverHook } from './components/ObserverHook/observer'
import Contact from './components/Contact/contact'
import { useSelector } from 'react-redux'
import Knowledge from './components/Knowledges'
import Projects from './components/Projects/projects'

const Modal = ( props ) => {
    
    if( !(props.component) ){
        return null
    }
    return(
        <div className="parent">
            <div className='child'>
                { props.component }
            </div>
        </div>
    )
}

const MainApp = ( props ) => {
    const introRef      = useRef( null )
    const aboutRef      = useRef( null )
    const experienceRef = useRef( null )
    const projectRef    = useRef( null )
    const knowledgeRef     = useRef( null )
    const contactRef    = useRef( null )
    const refs          = useRef([ introRef, aboutRef, experienceRef, contactRef, knowledgeRef, projectRef ])
    const modalContent  = useSelector( state => state.data )
    
    const [ values, setValues   ]   = useState(false)
    const [ showMenu, setShowMenu   ]   = useState( false )
    const observerHook    = ObserverHook( refs )

    useEffect(() => {
        setValues( observerHook )
    }, [ observerHook ])
    
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])
    
    return(
        <>
            <GlobalStyle />
            <Modal component={modalContent}/>
            {/* <button onClick={scroller}>SCROLLER</button> */}
            <styles.App>
                
                <styles.MenuSection showMenu={ showMenu }>
                    <Menu ref={refs} active={values}/>
                </styles.MenuSection> 
                <div style={{ width: '100%'}}>
                    
                    <styles.ContentSection showMenu={showMenu}>
                        <styles.HambMenuContainer showMenu={showMenu}>
                            <Hamburger color={'whitesmoke'} size={30} duration={0.5} toggled={showMenu} toggle={setShowMenu}/>
                        </styles.HambMenuContainer>
                        <Intro id="intro" animation={true} ref={ introRef } contact={contactRef}/>
                    </styles.ContentSection>
                    
                    <styles.ContentSection showMenu={showMenu}>
                        <About title={"Sobre Mim"} ref={ aboutRef } id={"about"} animation={values.about}/>
                    </styles.ContentSection>

                    <styles.ContentSection showMenu={showMenu}>
                        <Experience ref={experienceRef } id="experience" animation={values.experience}/>
                    </styles.ContentSection>

                    <styles.ContentSection showMenu={showMenu}>
                        <Knowledge ref={knowledgeRef} id="knowledge" animation={values.knowledge}/>
                    </styles.ContentSection>

                    <styles.ContentSection showMenu={showMenu}>
                        <Projects ref={projectRef } id="project" animation={values.project} />
                    </styles.ContentSection>

                    <styles.ContentSection showMenu={showMenu}>
                        <Contact ref={contactRef } id="contact" animation={values.contact}/>
                    </styles.ContentSection>
                    

                    {/* <styles.ContentSection showMenu={showMenu}>
                        <Technologies ref={ projectRef } id='projects' animation={ values.projects }/>
                    </styles.ContentSection> */}
                
                </div>
            </styles.App>
            
        </>
    )
}

export default MainApp