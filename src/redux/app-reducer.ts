import { ThunkAction } from 'redux-thunk'
import { getAuthUserData } from './auth-reducer'
import { AppStateType } from './redux-store'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false,
}

const appReducer = (
    state = initialState,
    action: InitializedSuccessActionType
): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

//AC
type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({
    type: INITIALIZED_SUCCESS,
})

//TC
// type DispatchType = Dispatch<InitializedSuccessActionType>
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, InitializedSuccessActionType>

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer
