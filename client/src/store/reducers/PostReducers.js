const { POSTS_LOADING, GET_POSTS} = require('../types')

const initialState = {
    posts: [],
    postsLoading: ''
    
}

const PostReducer = (state = initialState, action ) => {
    switch (action.type) {
        case POSTS_LOADING:
            return { ...state, postsLoading: action.payload }
        case GET_POSTS:
            return { ...state, postsLoading: action.payload }
        default: 
        return { ...state }
    }
}

export default PostReducer