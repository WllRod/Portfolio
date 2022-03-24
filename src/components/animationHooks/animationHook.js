import React from 'react'

export const AnimationHooks    = ( props ) => {
    const [ animation, setAnimation ]   = React.useState( false )

    React.useEffect(() => {
        if( !(animation) && props.animation ){
            setAnimation( true )
        }
    }, [ props.animation ])

    return animation
}
