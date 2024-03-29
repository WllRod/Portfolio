import React, { useRef } from 'react'
import Card from '../Card/card'
import * as styles from '../../styles/componentsStyles/contact'
import Map from '../../assets/map.png'
import { AnimationHooks } from '../animationHooks/animationHook'
import { ObserverHook } from '../ObserverHook/observer'
import Button from '../Assets/button'
import emailjs from '@emailjs/browser';
import { useDispatch } from 'react-redux'

interface Props{
    id: string,
    animation: boolean
}

const Contact   = React.forwardRef<HTMLDivElement, Props>(( props, ref) => {
    const labelsRef = React.useRef( null )
    const animation = AnimationHooks( props )
    const formRef   = useRef( null )
    const refs      = React.useRef([ labelsRef ])
    const [ values, setValues ] = React.useState({})
    const [ inputs, setInputs ] = React.useState( {} )
    const [ openModal, setOpenModal ]  = React.useState(false)
    const observer  = ObserverHook( refs )
    // const dispatch  = useDispatch()

    React.useEffect(() => {
        setValues( prevState => ({
            ...prevState,
            ...observer
        }))
    }, [ observer ])

    const handleInputs  = ( e ) => {
        var id  = e.target.id
        setInputs({
            ...inputs,
            [id]: e.target.value
        })
    }

    const clearInputs   = () => {
        let tmp = {}
        Object.keys(inputs).map(( k, v ) => {
            tmp[k]  = ''
        })
        setInputs( tmp )

    }
    const handleSubmit  = ( e ) => {
        
        const SERVICE_ID    = process.env.REACT_APP_SERVICE_ID
        const TEMPLATE_ID   = process.env.REACT_APP_TEMPLATE_ID
        const USER_ID       = process.env.REACT_APP_USER_ID
        var data = {
            to_email:'wll_rodrigues@outlook.com',
            to_name:inputs['name'],
            from_name: inputs['email'],
            message: inputs['message']
        };

        

        emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
            .then((result) => {
                // dispatch({ type: 'SHOW_MODAL', Component: <ModalContent />});
                setOpenModal(true)
                clearInputs()
            })
            .catch(function(err){
                alert(err)
            })
            
    }

    
    const ModalContent   = ( props ) => {
        if(!openModal) return null

        return(
            <div className="parent">
                <div className='childContainer'>
                    <div className='child'>
                        E-mail enviado com sucesso!
                        <Button title={"Sair"} onClick={() => setOpenModal(false)}/>
                    </div>
                </div>
            </div>
    
        )
    }
    return(
        <Card title={"Entre em contato"} animation={ props.animation || animation } ref={ ref } id={ props.id }>
            <styles.ContactContainer>
               
                <styles.TitleDivContainer image={Map} ref={labelsRef} id='labels' animation={ values['labels'] }>
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
                    <input 
                        placeholder='Seu Nome' 
                        id='name' 
                        onChange={e => handleInputs( e )} 
                        value={inputs['name'] || ''}
                        autoComplete="nope"
                       
                    />
                    <input 
                        placeholder='Endereço de Email' 
                        id='email' 
                        onChange={e => handleInputs( e )} 
                        value={inputs['email'] || ''}
                        autoComplete="nope"
                    />
                    <input 
                        style={{ minWidth: '91%' }} 
                        placeholder='Assunto' 
                        id='subject' 
                        onChange={e => handleInputs( e )}
                        value={inputs['subject'] || ''}
                        autoComplete="nope"
                    />
                    <textarea 
                        style={{ minWidth: '91%' }} 
                        placeholder='Mensagem' 
                        id='message' 
                        onChange={e => handleInputs( e )} 
                        value={inputs['message'] || ''}
                        autoComplete="nope"
                    />
                    <Button title="Mandar Mensagem" onClick={e => handleSubmit( e )}/ >
                        <ModalContent />
                    {/* <input type="submit" value="Send" /> */}
                </styles.FormContainer>
            </styles.ContactContainer>
        </Card>
    )
    
})

export default Contact