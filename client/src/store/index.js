import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import PostReducer from './reducers/PostReducers'
import PostDetailsReducer from './reducers/PostDetailsReducer'
import CommentsReducer from './reducers/CommentsReducers'
import CommentDetailsReducer from './reducers/CommentDetailsReducer'
import ReviewReducer from './reducers/ReviewReducer'
import ReviewDetailsReducer from './reducers/ReviewDetailsReducer'

const store = createStore(
  combineReducers({
    postState: PostReducer,
    postDetailsState: PostDetailsReducer,
    commentsState: CommentsReducer,
    commentDetailsState: CommentDetailsReducer,
    reviewState: ReviewReducer,
    reviewDetailsState: ReviewDetailsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
