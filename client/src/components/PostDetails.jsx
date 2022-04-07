import Comment from "./Comment"
import WriteComment from "./WriteComment"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const mapStateToProps = ({ postDetailsState }) => {
    return { postDetailsState }
    }
    
const mapDispatchToProps = (dispatch) => {
    return {
    fetchPostDetails: (id) => dispatch(LoadPostDetails(id))
    }
    }
    
const PostDetails = () => {
    let { id } = useParams()
    
    useEffect(() => {
    props.fetchPostDetails(id)
    }, [])
    
    return (
    <div className="post-details-container">
    <p>{ props.postDetailsState.postDetails.post }</p>
    <Link to='/writecomment'>Write comment</Link>
    </div>
    )
    
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)