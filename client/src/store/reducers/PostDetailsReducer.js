const { GET_POST_DETAILS } = require('../types')

const initialState = {
    postDetails: {}
    
}

const PostDetailsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_POST_DETAILS:
            return { ...state, postDetails: action.payload }
        default: 
        return { ...state }
    }
}

export default PostDetailsReducer