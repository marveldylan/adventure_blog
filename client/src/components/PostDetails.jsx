import Comment from "./Comment"
import WriteComment from "./WriteComment"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { LoadNewPost, LoadPostDetails } from "../store/actions/PostActions.js"
import { AddNewComment, GetComments, GetCommentDetails } from "../services/CommentsServices"
import { LoadCommentDetails, LoadNewComment } from "../store/actions/CommentActions"

const mapStateToProps = ({ postDetailsState, commentDetailsState }) => {
    return { postDetailsState, commentDetailsState }
    }
    
const mapDispatchToProps = (dispatch) => {
    return {
    fetchPostDetails: (id) => dispatch(LoadPostDetails(id)),
    createPost: (formValue) => dispatch(LoadNewPost(formValue)),
    fetchCommentDetails: (id) => dispatch(LoadCommentDetails(id)),
    createComment: (formValue) => dispatch(LoadNewComment(formValue))
    }
    }
    
const PostDetails = (props) => {

    const handleChange = (e) => {
        // props.commentDetailState({...newComment, [e.target.name]: e.target.value })
        props.createComment(e.target.value)
        console.log(e.target.value, 'HANDLE CHANGE VALUE')
      }
      
      const handleSubmit= (e) => {
          e.preventDefault()
          props.createComment(props.commentDetailsState.createComment)
          
      }

    let { id } = useParams()
    
    useEffect(() => {
    props.fetchPostDetails(id)
    console.log(props, 'POST PROPS')
    }, [id])
    
    return (
        <div className="list-container">
            <div className="post-details-container">
                <p>{props.postDetailsState.postDetails.title}</p>
                <img src={props.postDetailsState.postDetails.image} alt="blog-image"/>
                <p>{props.postDetailsState.postDetails.post}</p>
            </div>
            <div className="comments-container">
                <WriteComment handleChange={handleChange} handleSubmit={handleSubmit} formValue={props.commentDetailsState.newComment}/>
                <Comment props={props}/>
                {/* <Link to='/writecomment'>Write comment</Link> */}
            </div>
        </div>
    


    )
    
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)