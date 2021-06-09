import React, { Component } from 'react'

import './components/Common/_normalize.css'
import './components/Common/_nullstyle.css'
import './components/Common/__scrollbar.scss'
import './App.scss'

import HeaderContainer from './components/Header/HeaderContainer'
import Main from './components/Main/Main'
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux'

import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { Preloader } from './components/Common/Preloader'
import { AppStateType } from './redux/redux-store'

type MapStatePropsType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    initializeApp: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class App extends Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app">
                <HeaderContainer />
                <Main />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    initialized: state.app.initialized,
})

// <MapStatePropsType, MapDispatchPropsType, undefined, AppStateType>

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        {
            initializeApp,
        }
    )
)(App) as React.ComponentType
