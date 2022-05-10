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
import { useSelector } from 'react-redux'
import Knowledge from './components/Knowledges'
import Projects from './components/Projects/projects'
import TSX from './components/Card/card'

// const Modal = ( props ) => {
    
//     if( !(props.component) ){
//         return null
//     }
//     return(
//         <div className="parent">
//             <div className='child'>
//                 { props.component }
//             </div>
//         </div>
//     )
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
    
    const [ values, setValues   ]   = useState({
        about: false
    })
    const [ showMenu, setShowMenu   ]   = useState( false )
    const observerHook    = ObserverHook( refs )

    useEffect(() => {
        console.log( observerHook )
    }, [ observerHook ])
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return(
        <>
            <GlobalStyle />
            <S.App>
                <S.MenuSection showMenu={showMenu}>
                   <Menu ref={refs} active={true} />
                </S.MenuSection>

                <div style={{ width: '100%'}}>
                    <S.ContentSection showMenu={showMenu}>
                        <S.HambMenuContainer showMenu={showMenu}>
                            <Hamburger color={'whitesmoke'} size={30} duration={0.5} toggled={showMenu} toggle={setShowMenu}/>
                        </S.HambMenuContainer>
                        {/* <Intro id="intro" animation={true} ref={ introRef } contact={contactRef}/> */}
                    </S.ContentSection>

                    <S.ContentSection showMenu={showMenu}>
                        <About title={"Sobre Mim"} ref={ aboutRef } id={"about"} animation={values['about']}/>
                    </S.ContentSection>

                </div>
            </S.App>
        </>
    )
}

export default MainApp

