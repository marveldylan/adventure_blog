import { useEffect } from "react"
import { connect } from "react-redux"
import {LoadComments} from '../store/actions/CommentActions'

const mapStateToProps = ({ commentsState }) => {
    return  { commentsState }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: () => dispatch(LoadComments())
    }
}
const Comment = (props) => {
    useEffect(()=> {
        props.fetchComments()
        console.log(props, 'MESSAGE')
    }, [])


    return(
        <div className="comment-container">
            {/* {
            props.commentsState.comments[0].map((comment) => {
                console.log(comment, 'prop comment')
                return (
                    <div key={comment._id} className="comment-item">
                        <p>ID: {comment._id}</p>
                        <p>MESSAGE: {comment.msg}</p>
                    </div>
            )
            })
            } */}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)