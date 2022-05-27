import React, { useEffect, useRef, useState } from 'react'
import './app.css'
import GlobalStyle from './styles/global'
import * as S from './styles/appStyles'
import Intro from './components/Intro/intro'
import About from './components/About/about'
import Experience from './components/Experience/experience'
import Menu from './components/Menu/menu'
import { Divide as Hamburger } from 'hamburger-react'
import { ObserverHook } from './components/ObserverHook/observer'
import Contact from './components/Contact/contact'
import Knowledge from './components/Knowledges'
import Projects from './components/Projects/projects'
import SwitchTheme from './components/Theme/Theme'

// const Modal = ( props ) => {
    
//     if( !(props.component) ){
//         return null
//     }
//     return(

// }

interface Props {

}
const MainApp: React.FC<Props> = () => {
    const introRef      = useRef<HTMLDivElement>( null )
    const aboutRef      = useRef<HTMLDivElement>( null )
    const experienceRef = useRef<HTMLDivElement>( null )
    const projectRef    = useRef<HTMLDivElement>( null )
    const knowledgeRef     = useRef<HTMLDivElement>( null )
    const contactRef    = useRef<HTMLDivElement>( null )
    const refs          = useRef([ introRef, aboutRef, experienceRef, contactRef, knowledgeRef, projectRef ])
    // const modalContent  = useSelector( state => state.data )
    const [ darkMode, setDarkMode ] = React.useState<boolean>(false);
    const [ values, setValues   ]   = useState({})
    const [ showMenu, setShowMenu   ]   = useState( false )
    const observerHook    = ObserverHook( refs )

    useEffect(() => {
        setValues( prevState => ({ ...prevState, ...observerHook}))

    }, [ observerHook ])
    
    useEffect(() => {
        console.log(darkMode)
    }, [ darkMode ])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return(
        <>
            <GlobalStyle darkMode={darkMode}/>
            <S.App>
                <S.MenuSection showMenu={showMenu}>
                   <Menu ref={refs} active={true} />
                </S.MenuSection>
                <SwitchTheme callback={setDarkMode}/>
                <div style={{ width: '100%'}}>
                    <S.ContentSection>
                        <S.HambMenuContainer showMenu={showMenu}>
                            <Hamburger  size={30} duration={0.5} toggled={showMenu} toggle={setShowMenu}/>
                        </S.HambMenuContainer>
                        <Intro id="intro" ref={introRef} contactRef={contactRef}/>
                    </S.ContentSection>

                    <S.ContentSection>
                        <About title={"Sobre Mim"} ref={ aboutRef } id={"about"} animation={values['about']}/>
                    </S.ContentSection>

                    <S.ContentSection>
                        <Experience ref={experienceRef } id="experience" animation={values['experience']}/>
                    </S.ContentSection>

                    <S.ContentSection>
                        <Knowledge ref={knowledgeRef} id="knowledge" animation={values['knowledge']}/>
                    </S.ContentSection>

                    <S.ContentSection>
                        <Projects ref={projectRef } id="project" animation={values['project']} />
                    </S.ContentSection>

                    <S.ContentSection>
                        <Contact ref={contactRef } id="contact" animation={values['contact']}/>
                    </S.ContentSection>

                </div>
            </S.App>
        </>
    )
}

export default MainApp

