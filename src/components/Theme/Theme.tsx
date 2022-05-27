import React from 'react'
import * as S from '../../styles/componentsStyles/theme'
import { FaSun, FaMoon } from 'react-icons/fa'

interface IThemeProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    callback?: React.Dispatch<React.SetStateAction<boolean>>
}

const SwitchTheme: React.FC<IThemeProps> = ({ callback, ...props }) => {
    const [ darkMode, setDarkMode ] = React.useState( true )

    React.useEffect(() => {
        if( callback ) callback( darkMode )
    }, [ darkMode ])
    return(
        <S.Container>
            <S.Bar>
                <S.Button
                    onClick={() => {
                        
                        setDarkMode(!darkMode)
                        
                    }}
                    darkMode={darkMode}
                    {...props}
                >
                    { darkMode ? <FaSun /> : <FaMoon />}
                </S.Button>
            </S.Bar>
        </S.Container>
    )
}

export default React.memo(SwitchTheme);