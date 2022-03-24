import styles from 'styled-components'

export const GridContainer  = styles.div`
    display: flex;
    opacity: 0.5;
`

export const Grid           = styles.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 60px;
`

export const Circles    = styles.div`
    width: 6px;
    height: 6px;
    border-radius: 100px;
    background: #6c757d;
    margin-top: 5px;
    margin-left: 8px;
    
`