import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {LoadComments} from '../store/actions/CommentActions'

const mapStateToProps = ({ commentState }) => {
    return  { commentState }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: () => dispatch(LoadComments())
    }
}
const Comment = (props) => {
    useEffect(()=> {
        props.fetchComments()
        console.log('test string for comments')
    }, [])

    console.log(props, 'COMMENT PROPS')

    // return(
    //     // <div className="comment-container">
    //     //     <h1>Comment is linked</h1>
    //     //     {props.commentState.comments.map((comment) => (
                
    //     //     ))}
    //     // </div>
    // )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)