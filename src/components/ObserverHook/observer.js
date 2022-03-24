import React, { useEffect } from 'react'

export const ObserverHook  = ( refsArray ) => {
    const [ refsDict, setRefsDict ] = React.useState({})

    useEffect(() => {
        
        refsArray.current.forEach(( k ) => {
            if( k.current ){
                var id  = k.current.id
                setRefsDict({
                    ...refsDict,
                    [id]: false
                })
            }
        })

        const observer  = new IntersectionObserver( ( entries ) => {
            const [ entry ] = entries
            if( entry.isIntersecting ){
                var id  = entry.target.id
                setRefsDict({
                    ...refsDict,
                    [id]: true
                })
            }
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        } )
        refsArray.current.forEach(( k ) => {
            if( k.current ) observer.observe( k.current )
        })

        return () => {
            refsArray.current.forEach(( k ) => {
                if( k.current ) observer.unobserve( k.current )
            })
        }

    }, [ refsArray ])

    return refsDict
}