import styled from 'styled-components'


export const Container = styled.div`
    position:absolute;
    right:40px;
    width:max-content;
    height:max-content;
    top:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    
`

export const Bar = styled.div`
    display:flex;
    background:#8b88b1;
    border-radius:30px;
    width:50px;
    height:10px;
    position:relative;
`
export const Button = styled.section`
    display:flex;
    position:absolute;
    width:30px;
    background:#ff4c60;
    padding:5px;
    cursor: pointer;
    top:-80%;
    height:30px;
    box-shadow: 1px 0px 5px black;
    border-radius:50%;
    z-index:100;
    align-items:center;
    justify-content:center;
    animation: ${props => props.darkMode ? 'slideToRigth' : props.darkMode !== null ? 'slideToLeft' : ''} 0.5s forwards;

    @keyframes slideToRigth{
        from{
            left:0;
        }
        to{
            left: 50%;
        }
    }

    @keyframes slideToLeft{
        from{
            left:50%;
        }
        to{
            left: 0;
        }
    }
`