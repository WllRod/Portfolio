import styles from 'styled-components'

export const ContactContainer   = styles.div`
    display:flex;
    flex-direction:row;
    padding-top:70px;
    padding-right:30px;
    margin-left:30px;
    position:relative;
    gap:10px;
    height:100vh;
    width:100%;
    
    @media screen and ( max-width:1000px ){
        flex-direction:column;
    }
`

export const TitleDivContainer  = styles.div`
    width:50%;
    height:50%;
    display:flex;
    flex-direction:column;
    background-image: url(${ props => props.image });
    background-repeat: no-repeat;
    background-size: contain;
    color:whitesmoke;
    visibility: ${ props => props.animation ? 'visibility' : 'hidden'};
    & > h3{
        font-size:30px;
        font-weight:700;
        
    }

    @media screen and ( max-width:1000px){
        width:100%;
        height:20%;
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

export const WppSpan    = styles.span`
    margin-top:15px;
    height:100%;
    font-size:20px;
    & > a {
        color:#ff4c60;
    }
`

export const FormContainer  = styles.form`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    height:max-content;
    gap:10px;
    
    & > input, textarea{
        font-family: "Rubik",sans-serif;
        display: block;
        border-radius: 30px;
        margin-top:10px;
        height: 60px;
        min-width:45%;
        padding: 10px 30px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
        color: #454360;
        background-color: #fff;
        background-image: none;
        border: 0;
        box-shadow: none;
        overflow:auto;
        resize:vertical;
    }

    @media screen and ( max-width:1000px){
        & > input, textarea{
            width:100%;
        }
    }
`