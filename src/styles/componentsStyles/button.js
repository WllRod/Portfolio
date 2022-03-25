import styles from 'styled-components'

export const Button = styles.div`
    background: #ff4c60;
    height: 50px;
    width: max-content;
    padding:10px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 50px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    color: white;
    // ${ props => props.animation && `
    //     transform: translatey(0px);
    //     &:hover{
    //         animation: float 0.5s ease-in-out;
    //     }

    //     @keyframes float{
    //         0%{
    //             //transform: translatey(0px);
    //         }
    //         50%{
    //             transform: translatey(5px);
    //             width: 100px;
    //             height: 40px;
                
    //         }
    //         100%{
    //             //transform: translatey(0px);
    //         }
    //     }
    // `}

`