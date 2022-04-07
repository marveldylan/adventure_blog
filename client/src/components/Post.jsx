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
        console.log('test string')
    }, [])

    return (
        <div className="list-container">
            {
                props.postState.posts.map((post) => (
                    <div key={post._id} className="post-profile">
                    <img className="post-image" src={post.image} alt="poster" />
                    <h3>{post.title}</h3>
                    <Link className="view" to={`/blogpost/${post._id}`}>Write comment</Link>
                    </div>
                    
                     
                ))
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
// import { useEffect } from "react"
// import { connect } from "react-redux"
// import { Link } from "react-router-dom"
// import { LoadPosts } from "../store/actions/PostActions.js"


// const mapStateToProps = ({ postState }) => {
//     return  { postState }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchPost: () => dispatch(LoadPosts())
//     }
// }
// const Post = (props) => {
//     useEffect(()=> {
//         props.fetchPost()
//         console.log('test string')
//     }, [])

//     return (
//         <div className="list-container">
//             {
//                 props.postState.posts.map((post) => (
//                     <div key={post._id} className="post-profile">
//                     <img className="post-image" src={``} alt="poster" />
//                     <h3>{post.title}</h3>
//                     <Link className="view" to={`/blogpost/${post._id}`}>Write comment</Link>
//                     </div>
                    
//                 ))
//             }
//         </div>
//     )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Post)
