import Comment from "./Comment"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { GetCommentDetails } from "../services/CommentsServices"
   
    
 const mapStateToProps = ({commentsState }) => {
        return { commentsState }
    }
    
const mapDispatchToProps = (dispatch) => {
        return {
            fetchCommentDetails: (id) => dispatch(LoadCommentDetails(id))
        }
    }
    
const WriteComment = (props) => {

        let { id } = useParams()
    
        useEffect(() => {
            props.fetchComments(id)
        }, [])

    const handleChange = (e) => {
        commentState({...newReview, [e.target.name]: e.target.value })
        console.log(e.target.name)
        console.log(e.target.value)
      
      }
      
      const handleSubmit= (e) => {
           GetCommentDetails()
      }

    return (
        <div>
            <h2>Write a Comments</h2>
            <form className="submit-form" onSubmit={handleSubmit}> 
                 <input type="text" value={newReview.rating} onChange={handleChange} 
                         name={'rating'} placeholder={'Rate 1-5'} />
                 <input type="text" value={newReview.comments} onChange={handleChange} 
                         name={'comments'} placeholder={'Leave a comment'} />
                <button>Submit</button>
            </form>
          </div>
      
        
      )
 
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteComment)
