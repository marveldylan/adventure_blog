import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { LoadPosts } from "../store/actions/PostActions.js"

const mapStateToProps = ({ postState }) => {
    return  { postState }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: () => dispatch(LoadPosts())
    }
}
const Post = (props) => {
    useEffect(()=> {
        props.fetchPost()
        console.log(props)
    }, [])

    return (
        <div className="list-container">
            {
                // props.postState.post.map((post) => (
                //     <div key={post.id} className="post-profile">
                //     <img className="post-image" src={``} alt="poster" />
                //     <h3>{post.title}</h3>
                //     <Link to={`/post/${post.id}`}>View post</Link>
                //     </div>
                // ))
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)