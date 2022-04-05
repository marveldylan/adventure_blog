const { GET_COMMENTS } = require('../types')

const initialState = {
    comments: []
}

const CommentsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_COMMENTS:
            return { ...state, products: action.payload }
            default: 
            return { ...state }
    }
}

export default CommentsReducer