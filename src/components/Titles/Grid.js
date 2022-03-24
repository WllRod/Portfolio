import React from 'react'
import * as styles from '../../styles/componentsStyles/titleStyles'

const Circles   = ( props ) => {

    const array = Array.from(Array(16).keys())
    return(
        <styles.GridContainer>
            <styles.Grid>
                {
                    array.map(( k, v ) => {
                        return(
                            <styles.Circles key={v}/>
                        )
                    })
                }
            </styles.Grid>
        </styles.GridContainer>
    )
}

export default Circles