import styles from 'styled-components'

export const PgrBarContainer    = styles.div`
    display: flex;
    flex-direction: column;
    background: none;
    height: 60px;
    
`

export const Section1           = styles.section`
    display:flex;
    flex-direction:row;
    background:none;
    justify-content:space-between;
`
export const PgrMain            = styles.div`
    width:100%;
    background: #f1f1f1;
    margin-top:10px;
    border-radius:10px;
    height:max-content;
    position:relative;
    
`

export const Bar                = styles.div`
    border-radius:10px;
    height: 100%;
    border-radius: 10px;
    width: ${ props => props.width }%;
    background: ${ props => props.background};
    color:transparent;
    font-size:10px;
`