import styles from 'styled-components'

export const ExperienceContainer    = styles.div`
    
    transition: 0.5s;
    transform: translateY(0);
    display:flex;
    text-justify: inter-character;
    flex-direction:row;
    padding-top:70px;
    margin-left:30px;
    letter-spacing:1px;
    gap:20px;
    flex-wrap:wrap;
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
    @media screen and (max-width:767px){
        flex-direction: column;
        margin-left:0px;
    }
    @media screen and ( min-width:768px ) and ( max-width:1023px){
        margin-left:0px;
    }
    // ${ props => props.animation && `
    //     transform: translateY(0);
    // `}
`
export const ExperienceContent  = styles.section`
        border-radius:30px;
        display: flex;
        background: #302f4e!important;
        flex-direction:row;
        width:33vw;
        height:auto;
        padding:20px;
        padding-top:0px;
        color:whitesmoke;
        & > *{
            margin-top:15px;
        }
        @media screen and ( max-width: 767px ){
            width: 100%;
        }
        @media screen and ( min-width:768px ) and ( max-width:1023px){
            width:50%;
        }
        transition: 0.5s;
        transform: translateY(0);
        
`

export const SectionsContainer    = styles.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-left: 1px solid #ff4c60;
        position: relative;
`
export const Section    = styles.section`
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        padding-left: 25px;
        visibility: ${ props => props.animation ? 'visibility' : 'hidden'};
        & > * {
            margin-bottom:10px;
            
        }
        transition: 0.5s;
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
`

export const IconDiv    = styles.div`
        width: max-content;
        height: max-content;
        position: absolute;
        left: -15px;
`

export const TimeSpan   = styles.span`
        margin-top:5px;
        font-size:14px;
        color:#8b88b1;
`

export const LocalSpan  = styles.span`
        font-weight:700;
        font-size:30px;
`

export const DescSpan   = styles.span`

`