import styles from 'styled-components'

export const ProjectsContainer  = styles.div`
    padding-top: 70px;
    margin-left:30px;
    display:flex;
    flex-direction:row;
    gap:10px;
    width:100%;
    height:90vh;
    
    @media screen and (max-width:767px)
    {
        margin-left:0px;
    }
`

export const ProjectsCard   = styles.div`
    position:relative;
    border-radius:30px;
    display: flex;
    //background: white;
    background-image: url(${ props => props.url });
    background-size: cover;
    background-repeat: no-repeat;
    flex-direction:column;
    height:70%;
    width:33vw;
    // padding:20px;
    // padding-top:0px;
    color:whitesmoke;
    & > *{
        margin-top:15px;
    }
    @media screen and ( max-width: 767px ){
        width: 100%;
        height:100%;
        margin-left:0px;
    }
`
export const HoverContainer = styles.div`
    width: 100%;
    height:100%;
    position:relative;
    & > * {
        animation: fadeInUp 1s ease-in-out;
    }
`
export const Hover  = styles.div`
    width:100%;
    height:100%;
    position:relative;


    right: 0;
    &:after{
        content: '';
        background: #302f4e;
        width:100%;
        height:104.5%;
        position:absolute;
        top:-14px;
        right:0;
        opacity:1;
        border-radius:30px;
        box-shadow:10px 0px 10px 10px #353353;
        
        
    }
`

export const HoverContent   = styles.section`
    display:flex;
    width:100%;
    height:100%;
    visibility:${ props => props.visible ? 'visibility' : 'hidden'};
    
`

export const ToolBar = styles.div`
    width:100%;
    height:100%;
    position:relative;
    
    
    right: 0;
    &:after{
        content: '';
        background: #353353;
        width:100%;
        height:104.5%;
        position:absolute;
        top:-14px;
        right:0;
        opacity:0.7;
        border-radius:30px 0 0 30px;
        box-shadow:10px 0px 10px 10px #353353;
        
    }


`

export const ToolBarChild = styles.div`
    color:black;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    position:relative;
    z-index:1;
    
`

export const TypeOfProject = styles.div`
    position:absolute;
    
    right: 40px;
    background: #ff4c60;
    font-size:1.2rem;
    letter-spacing:1px;
    width:max-content;
    text-align:center;
    height:max-content;
    
    padding:10px;
    
    @media screen and (max-width: 767px)
    {
        border-radius: 30px 30px 0 0;
        bottom:-14px;
    }

    @media screen and (min-width: 768px)
    {
        border-radius: 0 0 30px 30px;
        top:-14px;
    }
    // @media screen and ( max-width: 767px ){
    //     width: 100%;
    //     height:100%;
    //     margin-left:0px;
    // }

`

export const ProjectTitle = styles.div`
    width: 100%;
    height: max-content;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-weight:700;
    font-size:30px;
    padding: 20px;
`

export const ProjectsCardContainer = styles.div`
    width: max-content;
    height:100%;
    display:flex;
    flex-direction:column;

    @media screen and (max-width:767px)
    {
        width:100%;
    }
`