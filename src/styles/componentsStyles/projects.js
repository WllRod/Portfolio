import styles from 'styled-components'

export const ProjectsContainer  = styles.div`
    padding-top: 70px;
    margin-left:30px;
    display:flex;
    flex-direction:row;
    gap:10px;
    width:100%;
    height:90vw;
`

export const ProjectsCard   = styles.div`
    position:relative;
    border-radius:30px;
    display: flex;
    background-image: url(${ props => props.url });
    background-size: cover;
    background-repeat: no-repeat;
    flex-direction:column;
    height:20%;
    width:25%;
    padding:20px;
    padding-top:0px;
    color:whitesmoke;
    & > *{
        margin-top:15px;
    }
    @media screen and ( max-width: 767px ){
        width: 100%;
    }
`

export const Hover  = styles.div`
    position:absolute;
    top: -14px;
    border-radius:30px;
    left:0;
    width:100%;
    height: ${ props => props.visible ? '100%' : '0%'};
    transition:height 1s ease;
    background:#302f4e!important;
    opacity:0.9;
    margin-bottom:15px;
`

export const HoverContent   = styles.section`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    visibility:${ props => props.visible ? 'visibility' : 'hidden'};
    transition: visibility 0.5s ease;
    ${ props => props.visible && `
    animation: fadeInUp 1s ease-in-out;
    visibility:visibility;
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