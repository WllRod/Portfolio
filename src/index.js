import ReactDOM from 'react-dom'
import React from 'react'
import App from './app'
import { Provider } from 'react-redux'
import Store from './store/index'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
)