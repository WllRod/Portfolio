import React from 'react'
import Card from '../Card/card'
import * as styles from '../../styles/componentsStyles/contact'
import Map from '../../assets/map.png'
import { AnimationHooks } from '../animationHooks/animationHook'
import { ObserverHook } from '../ObserverHook/observer'
import Button from '../Assets/button'


const Contact   = React.forwardRef(( props, ref) => {
    const labelsRef = React.useRef( null )
    const animation = AnimationHooks( props )
    const refs      = React.useRef([ labelsRef ])
    const [ values, setValues ] = React.useState( false )
    const observer  = ObserverHook( refs )

    React.useEffect(() => {
        setValues( observer )
    }, [ observer ])

    const handleSubmit  = (  ) => {
        
        const DOMAIN    = process.env.REACT_APP_DOMAIN
        console.log(  DOMAIN )
    }
    return(
        <Card title={"Entre em contato"} animation={ props.animation || animation } ref={ ref } id={ props.id }>
            <styles.ContactContainer>
               
                <styles.TitleDivContainer image={Map} ref={labelsRef} id='labels' animation={ values.labels }>
                    <h3>Vamos conversar?</h3>
                    <styles.WppSpan>
                        Não gosta de formulário? Me chama no&nbsp;
                        <a href='https://api.whatsapp.com/send?phone=+5524993312025&text=Olá, William!' target={"_blank"}>
                            What's App
                        </a>
                        ! 👋
                    </styles.WppSpan>
                </styles.TitleDivContainer>
                <styles.FormContainer>
                    <input placeholder='Seu Nome'/>
                    <input placeholder='Endereço de Email'/>
                    <input style={{ minWidth: '91%' }} placeholder='Assunto'/>
                    <textarea style={{ minWidth: '91%' }} placeholder='Mensagem'/>
                    <Button title="Mandar Mensagem" onClick={handleSubmit}/ >
                </styles.FormContainer>
            </styles.ContactContainer>
        </Card>
    )
})

export default Contact