import Post from './Post'

const Home = () => {

    return(
        <div className="home-container">
            <div className="home-title">
                <p>Home</p>
            </div>
            <div className="posts-container">
                <Post />
            </div>
        </div>
    )
}

export default Home