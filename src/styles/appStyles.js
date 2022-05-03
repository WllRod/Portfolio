import styles from 'styled-components'

export const App    = styles.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    font-family: 'Rubik', sans-serif;
    overflow-Y: auto;
    overflow-X: hidden;
    
`
export const HambMenuContainer  = styles.div`
    position: fixed;
    z-index:200;
    margin-top:10px;
    left: ${ props => props.showMenu ? '20vw' : '100px'};
    transition:left 0.6s ease-in-out;
    @media screen and (max-width: 767px){
        &{
            left: ${ props => props.showMenu ? '70vw' : '0'};
        }
    }
`
export const MenuSection    = styles.section`
    height: 100vh;
    position:fixed;
    width:20vw;
    flex-direction:column;
    box-shadow: 0 1px 5px 1px #ff4c60;
    
    border-right:1px solid #ff4c60;
    ${ props => props.showMenu ? 'transform: translateX(0vw);' : 'transform: translateX(-855%);'}
    z-index:100;
    transition:transform 0.5s ease-in-out;
    @media screen and ( max-width: 767px){
        &{
            width: 70vw;
            position: fixed;
            height: 100vh;
            background: #353353;
        }
    }
`

export const ContentSection = styles.section`
    width: 100%;
    height: max-content;
    min-height:100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    ${ props => props.showMenu ? '    padding-left:20vw;' : ''}
    transition:padding 0.4s ease-in-out;
`


export const teste2 = styles.div`
    display: grid;
    width: 50vw;
    height: 50vh;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    width: 120px;
    height: 120px
`
export const teste3 = styles.div`
    width: 30px;
    height: 30px;
    border-radius: 100px;
    background: black;
    margin-top: 5px;
    margin-left: 5px;
`