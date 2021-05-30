import { getAuthUserData } from './auth-reducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action): InitialStateType => {
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
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer
