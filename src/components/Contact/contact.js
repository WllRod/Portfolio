import React, { useRef } from 'react'
import Card from '../Card/card'
import * as styles from '../../styles/componentsStyles/contact'
import Map from '../../assets/map.png'
import { AnimationHooks } from '../animationHooks/animationHook'
import { ObserverHook } from '../ObserverHook/observer'
import Button from '../Assets/button'
import emailjs from '@emailjs/browser';

const Contact   = React.forwardRef(( props, ref) => {
    const labelsRef = React.useRef( null )
    const animation = AnimationHooks( props )
    const formRef   = useRef( null )
    const refs      = React.useRef([ labelsRef ])
    const [ values, setValues ] = React.useState( false )
    const [ inputs, setInputs ] = React.useState( {} )
    const observer  = ObserverHook( refs )

    React.useEffect(() => {
        setValues( observer )
    }, [ observer ])

    const handleInputs  = ( e ) => {
        var id  = e.target.id
        setInputs({
            ...inputs,
            [id]: e.target.value
        })
    }
    const handleSubmit  = ( e ) => {
        
        const SERVICE_ID    = process.env.REACT_APP_SERVICE_ID
        const TEMPLATE_ID   = process.env.REACT_APP_TEMPLATE_ID
        const USER_ID       = process.env.REACT_APP_USER_ID
        var data = {
            to_email:'wll_rodrigues@outlook.com',
            to_name:inputs.name,
            from_name: inputs.email,
            message: inputs.message
          };
      
        emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert(error.text);
        });
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
                <styles.FormContainer ref={formRef}>
                    <input placeholder='Seu Nome' id='name' onChange={e => handleInputs( e )}/>
                    <input placeholder='Endereço de Email' id='email' onChange={e => handleInputs( e )}/>
                    <input style={{ minWidth: '91%' }} placeholder='Assunto' id='subject' onChange={e => handleInputs( e )}/>
                    <textarea style={{ minWidth: '91%' }} placeholder='Mensagem' id='message' onChange={e => handleInputs( e )}/>
                    <Button title="Mandar Mensagem" onClick={e => handleSubmit( e )}/ >
                    {/* <input type="submit" value="Send" /> */}
                </styles.FormContainer>
            </styles.ContactContainer>
        </Card>
    )
})

export default Contact