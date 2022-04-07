import Comment from "./Comment"
// import WriteComment from "./WriteComment"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { LoadPostDetails } from "../store/actions/PostActions.js"

const mapStateToProps = ({ postDetailsState }) => {
    return { postDetailsState }
    }
    
const mapDispatchToProps = (dispatch) => {
    return {
    fetchPostDetails: (id) => dispatch(LoadPostDetails(id))
    }
    }
    
const PostDetails = (props) => {
    let { id } = useParams()
    
    useEffect(() => {
    props.fetchPostDetails(id)
    console.log(props)
    }, [])
    
    return (
        <div className="list-container">
            <div className="post-details-container">
                <p>{props.postDetailsState.postDetails.title}</p>
                <img src={props.postDetailsState.postDetails.image} alt="blog-image"/>
                <p>{props.postDetailsState.postDetails.post}</p>
            </div>
            <div className="comments-container">
                {/* <WriteComment />
                <Comment />
                <Link to='/writecomment'>Write comment</Link> */}
                <Comment />
            </div>
        </div>
    


    )
    
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)