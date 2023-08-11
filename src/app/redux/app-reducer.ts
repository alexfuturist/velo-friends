// eslint-disable-next-line
import { FormAction } from 'redux-form';
import { getAuthUserData } from './auth-reducer';
import { BaseLocalThunkType, InferActionsTypes } from './redux-store';

//State
type InitialStateType = {
  initialized: boolean;
};

const initialState: InitialStateType = {
  initialized: false,
};

//Reducer
const appReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'VF/APP/INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

//AC Type
type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
  initializedSuccess: () =>
    ({
      type: 'VF/APP/INITIALIZED_SUCCESS',
    }) as const,
};

//TC Type
type LocalThunkType = BaseLocalThunkType<ActionType | FormAction>;

export const initializeApp = (): LocalThunkType => (dispatch) => {
  const promise = dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};

export default appReducer;
