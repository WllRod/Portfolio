import styles from 'styled-components'

export const IntroContainer = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    height: auto;
    min-height:650px;
    & > * {
        margin-top: 35px;
    }
    
`

export const NameStyle  = styles.h1`
    font-weight: 700;
    
`

export const typewriterH2   = styles.h2`
    
    
    font-weight: 400;
    
`

export const ExternaLink    = styles.span`
    transform: translatey(0px);
    
    &:hover{
        animation: animation 1s ease-in-out infinite;
    }
    @keyframes animation{
        0%{
            transform: scale(1.0);
        }
        50%{
            transform: scale(1.1);
            //width: 100px;
            //height: 40px;
            
        }
        100%{
            transform: scale(1.0);
            //transform: translatey(0px);
        }
    }
`

export const ScrollDownCont = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    position: absolute;
    bottom: 25px;
    
    @media screen and (max-width:767px)
    {
        bottom:120px;
    }
    @media screen and (min-width: 768px) and (max-width: 1400px)
    {
        bottom:120px;
    }
`
export const ScrollDown = styles.div`
    margin-top: 20px;
    width: 25px;
    height: 30px;
    border: 3px solid;
    border-radius: 60px;
    position: relative;
    &::before {
        content: '';
        width: 5px;
        height: 5px;
        position: absolute;
        
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        
        border-radius: 50%;
        opacity: 1;
        animation: wheel 2s infinite;
        -webkit-animation: wheel 2s infinite;
    }
    }

    @keyframes wheel {
    to {
        opacity: 0;
        top: 20px;
    }
    }

    @-webkit-keyframes wheel {
    to {
        opacity: 0;
        top: 20px;
    }
    }
`