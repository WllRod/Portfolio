import React, { useEffect } from 'react'

export const ObserverHook  = ( refsArray: React.RefObject<any> ) => {
    const [ refsDict, setRefsDict ] = React.useState({})
    const [ width, setWidth ]       = React.useState(0)

    React.useEffect(() => {
        function resizeEvent(){
            setWidth( window.innerWidth )
        }

        window.addEventListener('resize', resizeEvent)

        return ( ) => window.removeEventListener('resize', resizeEvent)
    })
    
    useEffect(() => {
        
        if( refsArray.current ){
            
            refsArray.current.forEach(( k, i ) => {
                
                const observer  = new IntersectionObserver(( entries ) => {
                    const [entry]   = entries
                    if(entry.isIntersecting){
                        setRefsDict({
                            ...refsDict,
                            [entry.target.id]: true
                        })
                    }
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: [0.3, 0.1]
                })

                if( k.current ){
                    observer.observe( k.current )
                }else if(k.current === undefined){
                    observer.observe( k )
                }
            })

        }
        

    }, [ refsArray ])

    return refsDict
}