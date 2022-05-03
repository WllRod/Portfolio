import styles from 'styled-components'

export const CardContent    = styles.div`
    display:flex;
    flex-direction:row;
    height:max-content;
    width:100%;
    
    padding-left:150px;
    padding-top:70px;
    margin-right: 200px;
    position:relative;
    @media screen and (max-width: 767px){
        &{
            flex-direction: column;
            padding-left:0;
        }
    }
    `

export const AboutContainer = styles.div`
    background: #302f4e!important;
    margin-left:30px;
    overflow: auto;
    color: whitesmoke;
    width: 60vw;
    
    border-radius: 30px;
    padding: 20px;
    height: auto;
    display: flex;
    flex-direction: row;
    letter-spacing: 1.5px;
    positition:relative;
    @media screen and (max-width: 1000px){
        & {
            margin-top: 35px;
            width: 80vw;
            margin-right: 80px;
            flex-direction: column;
        }
    }
    @media screen and ( max-width: 767px ){
        & {
            margin-left:0px;
            width:100%;
        }
    }
`

export const Section   = styles.div`
    display:flex;
    height:auto;
    flex-direction:column;
    width:50%;
    margin-bottom:20px;
    font-size:16px;
    margin-right:20px;
    ${ props => props.showBorder && `
        border-left: 1px solid #ff4c60;
        @media screen and (max-width:1000px){
            border-top:1px solid #ff4c60;
            border-left: 0;
        }
    `}
    @media screen and (max-width:1000px){
        width:100%;
        margin-right:0;
        
    }
`
export const ImgContainer   = styles.div`
    height:max-content;
    @media screen and ( max-width: 767px){
        & {
            width:100%;
            height:max-content;
            
            display:flex;
            justify-content:center;
        }
    }
`
export const IMG    = styles.div`
    width:80px;
    height:80px;
    border-radius:50%;
    background-image: url(${ props => props.image});
    background-size:cover;
    background-position: center;
    @media screen and ( max-width: 767px){
        & {
            width:110px;
            height:120px;
        }
    }
`
export const Arrow  = styles.div`
    position:absolute;
    left: ${ props => props.left}px;
    top:110px;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 20px solid #302f4e;
    
    @media screen and (max-width:767px){
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        top: 190px;
        
        border-bottom: 30px solid #302f4e;
    }

`