import styles from 'styled-components'

export const CardContainer = styles.div`
    
    width: 100%;
    display: flex;
    align-items:flex-start;
    ${ props => props.animation ? '' : `visibility:hidden;`}
    flex-direction:column;
    padding: 100px;
    position:relative;
    transition: 1.5s;
    transform: translateY(0);
    ${ props => props.animation && `
        animation: fadeInUp 1s ease-in-out;
        @keyframes fadeInUp{
            0% {
                opacity: 0;
                transform: translate3d(0,100%,0);
            }
            100% {
                opacity: 1;
                transform: translateZ(0);
            }
        }
    `}

    @media screen and ( max-width: 767px){
        padding:30px;
    }

`
export const CardTitle  = styles.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-right:500px;
`
export const CardTitleLabel = styles.h1`
    position: absolute;
    margin-left: 20px;
    font-weight: 700;
    color: white;
    bottom: -15px;
    left: 10px;
    background: none;
    width:max-content;
`