import ReactDOM from 'react-dom'
import React from 'react'
// import App from './app'
import { Provider } from 'react-redux'
import App from './app'
import Store from './store/index'

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
)