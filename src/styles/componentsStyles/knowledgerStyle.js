import styles from 'styled-components'

export const KnowledgeCards = styles.div`
    margin-top:20px;
    display:flex;
    
    flex-wrap:wrap;
    width: max-content;
    height: max-content;
    
    padding:5px;
    border-radius:25px;
    & > * {
        margin-top: 10px;
    }
    
    `
export const Content = styles.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    transition: 0.5s;
    transform: translateY(0);
    width:150px;
    transition: 0.5s;
    transform: translateY(0);
    visibility: ${ props => props.animation ? 'visibility' : 'hidden'};
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
    & > * {
        margin-bottom:10px;
    }

`