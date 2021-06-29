import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { store } from './redux/redux-store'
import { Provider } from 'react-redux'
import App from './App'
import './index.scss'

//функция отрисовки (перерисовки) UI
let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

//первичная отрисовка
renderEntireTree()

//подписка на события изменения
//переписывает метод _renderEntireTree() в state
store.subscribe(() => {
    renderEntireTree()
})
