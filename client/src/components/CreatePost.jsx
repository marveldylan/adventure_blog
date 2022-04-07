import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { LoadNewPost } from "../store/actions/PostActions"
import { AddNewPost } from "../services/PostServices"

   
    
 const mapStateToProps = ({postState}) => {
        return { postState }
    }
    
const mapDispatchToProps = (dispatch) => {
    return {
        fetchNewPost: () => dispatch(LoadNewPost())
    }
    }
    
const CreatePost = (props) => {

        let { id } = useParams()
    
        // useEffect(() => {
        
        // }, [])

    const handleChange = (e) => {
        props.LoadNewPost(e.target.value)
      
      }
      
      const handleSubmit= (e) => {
           AddNewPost()
      }

    return (
        <div>
            <h2>Create Post</h2>
            {/* <form className="submit-form" onSubmit={handleSubmit}> 
                 <input type="text" value={newPost.title} onChange={handleChange} 
                         name={'new post'} placeholder={'title'} />
                 <input type="text" value={newPost.post} onChange={handleChange} 
                         name={'post'} placeholder={'Write your post'} />
                <input type="text" value={newPost.image} onChange={handleChange} 
                         name={'post image'} placeholder={'Insert image URL'} />
                <button>Submit</button>
            </form> */}
          </div>
      
        
      )
 
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)