import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'
import starUsersReducer from './star-users-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    starUsersPage: starUsersReducer,
})

//StateType
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

//AC Types
export type InferActionsTypes<T> = T extends {
    [key: string]: (...args: any[]) => infer U
}
    ? U
    : never

//TC Types
type Action<T = any> = {
    type: T
}

export type BaseThunkType<A extends Action<string>, R = Promise<void>> =
    ThunkAction<R, AppStateType, unknown, A>

export type BaseLocalThunkType<A extends Action<string>, R = void> = ThunkAction<
    R,
    AppStateType,
    unknown,
    A
>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)
