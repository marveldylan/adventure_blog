import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import PostReducer from './reducers/PostReducers'
import CommentsReducer from './reducers/CommentsReducers'


const store = createStore(
    combineReducers({
        postState: PostReducer,
        commentsState: CommentsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  )

  export default store