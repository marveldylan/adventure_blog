import { useEffect } from "react"
import { connect } from "react-redux"
import {LoadComments } from '../store/actions/CommentActions'

const mapStateToProps = ({ commentsState }) => {
    return  { commentsState }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: () => dispatch(LoadComments()),
    }
}
const Comment = (props) => {
    useEffect(()=> {
        props.fetchComments()
    }, [])
    console.log(props, 'COMMENT COMPONENT')



    return(
        <div className="comment-container">
            {
            props.commentsState.comments.map((comment, index) => {
                return (
                    <div key={index} className="comment-item">
                        <p>{comment.msg}</p>
                    </div>
            )
            })
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)