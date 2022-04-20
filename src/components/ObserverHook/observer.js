import React, { useEffect } from 'react'

export const ObserverHook  = ( refsArray ) => {
    const [ refsDict, setRefsDict ] = React.useState({})
    let debounceTimeout = null
    
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
                    threshold: 0.1
                })

                if( k.current ){
                    observer.observe( k.current )
                }else if(k.current === undefined){
                    observer.observe( k )
                }
            })
    
            // const observer  = new IntersectionObserver( ( entries ) => {
            //     const [ entry ] = entries
            //     if( entry.isIntersecting ){
            //         var id  = entry.target.id
            //         setRefsDict({
            //             ...refsDict,
            //             [id]: true
            //         })
            //     }
            // },
            // {
            //     root: null,
            //     rootMargin: '0px',
            //     threshold: 0.2
            // } )
            // refsArray.current.forEach(( k ) => {
            //     if( k.current ) observer.observe( k.current )
            // })
    
            // return () => {
            //     refsArray.current.forEach(( k ) => {
            //         if( k.current ) observer.unobserve( k.current )
            //     })
            // }
        }
        

    }, [ refsArray ])

    return refsDict
}