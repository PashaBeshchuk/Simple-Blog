import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import { reducerPost } from './reducerPost'

const reducer = combineReducers({
  reducerPost
})

type RootReducersType = typeof reducer
export type AppStateType = ReturnType<RootReducersType>

export const initializeStore = (preloadedState = {}) => {
    return createStore(
        reducer,
        preloadedState, 
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}



