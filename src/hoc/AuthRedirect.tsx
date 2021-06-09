import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../redux/redux-store'

type MapStatePropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (
    state: AppStateType
): MapStatePropsForRedirectType => ({
    isAuth: state.auth.isAuth,
})

//@ts-ignore
export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<MapStatePropsForRedirectType> {
        render() {
            if (!this.props.isAuth) return <Redirect to="login" />

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
        RedirectComponent
    )

    return ConnectedAuthRedirectComponent
}
