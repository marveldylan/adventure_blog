import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import PostReducer from './reducers/PostReducers'
import PostDetailsReducer from './reducers/PostDetailsReducer'
import CommentsReducer from './reducers/CommentsReducers'
import CommentDetailsReducer from './reducers/CommentDetailsReducer'

const store = createStore(
  combineReducers({
    postState: PostReducer,
    postDetailsState: PostDetailsReducer,
    commentsState: CommentsReducer,
    commentDetails: CommentDetailsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
