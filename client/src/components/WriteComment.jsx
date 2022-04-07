import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
// import { AddNewComment, GetCommentDetails } from "../services/CommentsServices"
import { LoadCommentDetails, LoadNewComment } from "../store/actions/CommentActions"
import '../store/index'
   
    
 const mapStateToProps = ({commentDetailsState }) => {
        return {commentDetailsState}
    }
    
const mapDispatchToProps = (dispatch) => {
        return {
        fetchCommentDetails: (id) => dispatch(LoadCommentDetails(id)),
        }
    }
    
const WriteComment = (props) => {
    console.log(props, 'WRITE COMMENT PROPS')

        let { id } = useParams()
    
        useEffect(() => {
            props.fetchCommentDetails(id)
        }, [id])

    return (
        <div>
            <h2>Write a Comments</h2>
            <form className="submit-form" onSubmit={props.handleSubmit}> 
                 <textarea type="text" rows='10' value={props.formvalue} onChange={props.handleChange} 
                         name='comments' placeholder='Leave a comment...'></textarea>
                 {/* <input type="text" value={props.comments} onChange={handleChange} 
                         name={'comments'} placeholder={'Leave a comment'} /> */}
                <button>Submit</button>
            </form>
          </div>
      
        
      )
 
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteComment)
