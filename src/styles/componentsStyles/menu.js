import styles from 'styled-components'

export const Square = styles.div`
    width: 7px;
    height: 7px;
    background:#ff4c60;
    position:absolute;
    right:-12px;
    bottom:8px;
`

export const Logo   = styles.div`
    height: max-content;
    position:relative;
`
export const LogoContainer   = styles.div`
    font-weight: 700;
    width: 100%;
    padding:30px;
    color: whitesmoke;
    height: 20%;
    justify-content: flex-start;
    font-size:2rem;
    display:flex;
    flex-direction:row;
`
export const Button = styles.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width:100%;
    height:50px;
    cursor: pointer;
    margin-bottom:20px;
    color: ${ props => props.focus ? `#ffd15c`: 'whitesmoke'};
    font-weight: 400;
    &:hover{
        color:#ffd15c;
    }
`