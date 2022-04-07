const { POSTS_LOADING, GET_POSTS, ADD_POST, NEW_POST } = require('../types')

const initialState = {
    posts: [],
    postsLoading: '',
    newPost: {
        title: '',
        post: '',
        image: ''
    }
    
}

const PostReducer = (state = initialState, action ) => {
    switch (action.type) {
        case POSTS_LOADING:
            return { ...state, postsLoading: action.payload }
        case GET_POSTS:
            return { ...state, posts: action.payload }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { posts: action.payload, isComplete: false}],
                newPost: {}
              }
        case NEW_POST:
            return { ...state, newPost: action.payload}
        default: 
        return { ...state }
    }
}

export default PostReducer