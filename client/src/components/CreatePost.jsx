import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { LoadNewPost, CreateNewPost } from "../store/actions/PostActions"

   
    
 const mapStateToProps = ({postState}) => {
     console.log(postState, 'poststate')
        return { postState }
    }
    
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewPost: (post) => dispatch(LoadNewPost(post)),
        createPost: (formValue) => dispatch(CreateNewPost(formValue))
    }
    }
    
const CreatePost = (props) => {


        let { id } = useParams()
    
        useEffect(() => {
            console.log(props.postState)
        }, [])

    const handleTitle = (e) => {
        props.createPost(e.target.value)
      }
      const handlePost = (e) => {
        props.createPost(e.target.value)
      
      }
      const handleImage = (e) => {
        props.createPost(e.target.value)
      
      }
      
      const handleSubmit= (e) => {
           e.prevent.Default()
           props.submitNewPost(props.postState.newPost)
      }

    return (
        <div>
            <h2>Create Post</h2>
            <form className="submit-form" onSubmit={handleSubmit}> 
                 <input type="text" value={props.newPost} onChange={handleTitle} 
                         name={'new post'} placeholder={'title'} />
                 <input type="text" value={props.newPost} onChange={handlePost} 
                         name={'post'} placeholder={'Write your post'} />
                <input type="text" value={props.newPost} onChange={handleImage} 
                         name={'post image'} placeholder={'Insert image URL'} />
                <button>Submit</button>
            </form>
          </div>
      
        
      )
 
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)